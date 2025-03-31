import { IEmployee } from "../../types/types";
import anonym from "../../image/anonym.png";
import { formatDate } from "../../utils/utils";
import { Link } from "react-router-dom";
import "./employee.scss";
import { useAppDispatch } from "../../hooks/hooks";
import { setEmployeeProfile } from "../../slices/slice";

type EmployeeProps = {
  filtered: boolean;
  employee: IEmployee;
};

function Employee({ employee, filtered }: EmployeeProps) {
  const formattedDateBirthday = formatDate(employee.birthday);
  const dispatch = useAppDispatch();
  function handleClick() {
    dispatch(setEmployeeProfile(employee));
  }

  return (
    <div className="employee" key={employee.id}>
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
            <span className="employee__name">
              {employee.firstName + " " + employee.lastName}
            </span>
            <span className="employee__user-tag">{employee.userTag}</span>
          </div>
          <span className="employee__department">{employee.department}</span>
        </div>
      </div>
      {filtered && (
        <div className="employee__birthday">{formattedDateBirthday}</div>
      )}
      <Link
        to={`profile/${employee.id}`}
        className="employee__link"
        onClick={handleClick}
      ></Link>
    </div>
  );
}

export default Employee;
