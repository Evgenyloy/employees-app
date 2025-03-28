import { useGetEmployeesQuery } from "../../api/apiSlice";
import EmployeeItem from "../employee/Employee";
import { IEmployee } from "../../types/types";
import "./employeesList.scss";

function EmployeesList() {
  const {
    isLoading,
    isError,
    isSuccess,
    data: employees,
  } = useGetEmployeesQuery(null);

  const employeesItems = employees?.map((employee) => {
    return (
      <EmployeeItem
        key={employee.id}
        lastName={employee.lastName}
        firstName={employee.firstName}
        userTag={employee.userTag}
        department={employee.department}
        avatarUrl={employee.avatarUrl}
      />
    );
  });

  return <div>{employeesItems}</div>;
}

export default EmployeesList;
