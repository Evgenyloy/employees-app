import { IEmployee } from "../../types/types";
import anonym from "../../image/anonym.png";
import { formatDate } from "../../utils/utils";
import "./employee.scss";

type EmployeeProps = Pick<
  IEmployee,
  | "lastName"
  | "firstName"
  | "userTag"
  | "department"
  | "avatarUrl"
  | "birthday"
  | "filtered"
>;

function Employee({
  lastName,
  firstName,
  userTag,
  department,
  avatarUrl,
  birthday,
  filtered,
}: EmployeeProps) {
  const formattedDateBirthday = formatDate(birthday);

  return (
    <div className="employee">
      <div className="employee__info">
        <img
          className="employee__img"
          src={anonym}
          alt="person photo"
          width={72}
          height={72}
        />
        <div className="employee__wrapper">
          <div className="employee__name-wrapper">
            <span className="employee__name">{firstName + " " + lastName}</span>
            <span className="employee__user-tag">{userTag}</span>
          </div>
          <span className="employee__department">{department}</span>
        </div>
      </div>
      {filtered && (
        <div className="employee__birthday">{formattedDateBirthday}</div>
      )}
    </div>
  );
}

export default Employee;
