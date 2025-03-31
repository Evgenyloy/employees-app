import { useGetEmployeesQuery } from "../../api/apiSlice";
import EmployeeItem from "../employee/Employee";
import SkeletonGroup from "../skeleton/Skeleton";
import Error from "../error/Error";
import { useAppSelector } from "../../hooks/hooks";
import SearchError from "../searchError/SearchError";
import "./employeesList.scss";
import {
  filterBySearch,
  filterByTab,
  groupEmployeesByYear,
  sortEmployees,
} from "./employeesListUtils";

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
          <EmployeeItem
            key={employee.id}
            filtered={false}
            employee={employee}
          />
        ))}
      {isSuccess &&
        sortFilter === "birthday" &&
        sortedYears.map((year) => (
          <div key={year} className="year-group">
            <div className="year-divider">
              <span className="year-label">{year}</span>
            </div>
            {groupedEmployees[year].map((employee) => (
              <EmployeeItem
                key={employee.id}
                filtered={true}
                employee={employee}
              />
            ))}
          </div>
        ))}
    </section>
  );
}

export default EmployeesList;
