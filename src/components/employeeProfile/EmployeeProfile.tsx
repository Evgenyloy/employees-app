import { useAppSelector } from "../../hooks/hooks";
import { calculateAge } from "../../utils/utils";
import image from "../../image/anonym.png";
import { FaRegStar } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./employeeProfile.scss";

function EmployeeProfile() {
  const profile = useAppSelector((state) => state.employees.employeeProfile);
  const ageText = calculateAge(profile?.birthday);

  function formatBirthday(dateString: string) {
    if (!dateString) return;
    const months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  }

  function formatPhoneWithRegex(phone: string) {
    if (!phone) return;
    return phone.replace(
      /^(\+7|8)(\d{3})(\d{3})(\d{2})(\d{2})$/,
      "+7 ($2) $3 $4 $5"
    );
  }
  const navigate = useNavigate();
  function handleBackClick() {
    navigate("/");
  }

  return (
    <div className="profile">
      <div className="profile__top">
        <MdOutlineArrowBackIos
          className="profile__back"
          onClick={handleBackClick}
        />
        <img className="profile__image" src={image} alt="profile image" />
        <div className="profile__name-wrapper">
          <h2 className="profile__firstName">{profile?.firstName}</h2>
          <h2 className="profile__lastName">{profile?.lastName}</h2>
          <span className="profile__tag">{profile?.userTag}</span>
        </div>
        <span className="profile__department">{profile?.position}</span>
      </div>
      <div className="profile__bottom">
        <div className="profile__birthday-wrapper">
          <div className="profile__birthday">
            <FaRegStar className="profile__svg" />
            {formatBirthday(profile?.birthday as string)}
          </div>
          <span className="profile__years">{ageText}</span>
        </div>
        <div className="profile__phone">
          <BsTelephone className="profile__svg" />
          {formatPhoneWithRegex(profile?.phone as string)}
        </div>
      </div>
    </div>
  );
}

export default EmployeeProfile;
