import { useGetEmployeesQuery } from "../../api/apiSlice";
import EmployeeItem from "../employee/Employee";
import { IEmployee } from "../../types/types";
import SkeletonGroup from "../skeleton/Skeleton";
import Error from "../error/Error";
import { useAppSelector } from "../../hooks/hooks";
import SearchError from "../searchError/SearchError";
import "./employeesList.scss";

function groupEmployeesByYear(employees: IEmployee[]) {
  const grouped: { [year: string]: IEmployee[] } = {};

  employees?.forEach((employee) => {
    const year = employee.birthday.split("-")[0];

    if (!grouped[year]) {
      grouped[year] = [];
    }

    grouped[year].push(employee);
  });

  return grouped;
}

function EmployeesList() {
  const {
    isFetching,
    isLoading,
    isError,
    isSuccess,
    data: employees = [],
  } = useGetEmployeesQuery(null);

  const activeTabFilter = useAppSelector((state) => state.employees.tabs);
  const searchFilter = useAppSelector((state) => state.employees.input);
  const sortFilter = useAppSelector((state) => state.employees.popUpSort);

  function filterByTab(employees: IEmployee[], filter: string) {
    if (!employees) return [];
    if (filter === "Все") return employees;
    return employees.filter((item) => item.department === filter);
  }
  function filterBySearch(employees: IEmployee[], filter: string) {
    return employees.filter(
      (item) =>
        item.firstName.toLowerCase().startsWith(filter.toLowerCase()) ||
        item.lastName.toLowerCase().startsWith(filter.toLowerCase()) ||
        item.userTag.toLowerCase().startsWith(filter.toLowerCase())
    );
  }

  function sortEmployees(employees: IEmployee[], filter: string): IEmployee[] {
    const sorted = [...employees];

    switch (filter) {
      case "alphabetical":
        return sorted.sort((a, b) => {
          if (a.firstName > b.firstName) {
            return 1;
          }
          if (a.firstName < b.firstName) {
            return -1;
          }
          return 0;
        });

      case "birthday":
        return sorted.sort(
          (a, b) =>
            new Date(a.birthday).getTime() - new Date(b.birthday).getTime()
        );

      default:
        return sorted;
    }
  }

  const sortedEmployees = sortEmployees(employees, sortFilter);
  const filteredEmployees = filterByTab(
    filterBySearch(sortedEmployees, searchFilter),
    activeTabFilter
  );

  const groupedEmployees = groupEmployeesByYear(filteredEmployees);
  const sortedYears = Object.keys(groupedEmployees).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <section className="employees-list">
      {(isLoading || isFetching) && <SkeletonGroup count={10} />}
      {isError && <Error />}
      {searchFilter !== "" && filteredEmployees.length === 0 && <SearchError />}
      {isSuccess &&
        sortFilter !== "birthday" &&
        filteredEmployees.map((employee) => (
          <EmployeeItem filtered={false} employee={employee} />
        ))}
      {isSuccess &&
        sortFilter === "birthday" &&
        sortedYears.map((year) => (
          <div key={year} className="year-group">
            <div className="year-divider">
              <span className="year-label">{year}</span>
            </div>
            {groupedEmployees[year].map((employee) => (
              <EmployeeItem filtered={true} employee={employee} />
            ))}
          </div>
        ))}
    </section>
  );
}

export default EmployeesList;
