import { useGetEmployeesQuery } from "../../api/apiSlice";
import EmployeeItem from "../employee/Employee";
import { IEmployee } from "../../types/types";
import SkeletonGroup from "../skeleton/Skeleton";
import Error from "../error/Error";
import "./employeesList.scss";
import { useAppSelector } from "../../hooks/hooks";

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
  const groupedEmployees = groupEmployeesByYear(employees || []);
  const sortedYears = Object.keys(groupedEmployees).sort(
    (a, b) => Number(b) - Number(a)
  );

  const activeTabFilter = useAppSelector((state) => state.employees.tabs);
  const searchFilter = useAppSelector((state) => state.employees.input);

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
  const filteredEmployees = filterByTab(
    filterBySearch(employees, searchFilter),
    activeTabFilter
  );

  return (
    <section className="employees-list">
      {(isLoading || isFetching) && <SkeletonGroup count={10} />}
      {isError && <Error />}
      {isSuccess &&
        filteredEmployees.map((employee) => (
          <EmployeeItem
            key={employee.id}
            lastName={employee.lastName}
            firstName={employee.firstName}
            userTag={employee.userTag}
            department={employee.department}
            avatarUrl={employee.avatarUrl}
            birthday={employee.birthday}
            filtered={false}
          />
        ))}
      {/*       {isSuccess &&
        sortedYears.map((year) => (
          <div key={year} className="year-group">
            <div className="year-divider">
              <span className="year-label">{year}</span>
            </div>
            {groupedEmployees[year].map((employee) => (
              <EmployeeItem
                key={employee.id}
                lastName={employee.lastName}
                firstName={employee.firstName}
                userTag={employee.userTag}
                department={employee.department}
                avatarUrl={employee.avatarUrl}
                birthday={employee.birthday}
                filtered={true}
              />
            ))}
          </div>
        ))} */}
    </section>
  );
}

export default EmployeesList;
