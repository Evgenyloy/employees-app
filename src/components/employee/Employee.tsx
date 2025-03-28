import { IEmployee } from "../../types/types";
import "./employee.scss";

type EmployeeProps = Pick<
  IEmployee,
  "lastName" | "firstName" | "userTag" | "department" | "avatarUrl"
>;

function Employee({
  lastName,
  firstName,
  userTag,
  department,
  avatarUrl,
}: EmployeeProps) {
  return (
    <div className="employee">
      <img className="employee__img" src={avatarUrl} alt="person photo" />
      <div className="employee__name-wrapper">
        <span className="employee__name">{firstName + " " + lastName}</span>
        <span className="employee__user-tag">{department}</span>
      </div>
      <span className="employee__job-title">{userTag}</span>
    </div>
  );
}

export default Employee;
