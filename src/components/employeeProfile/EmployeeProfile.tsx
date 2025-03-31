import image from "../../image/anonym.png";
import { useAppSelector } from "../../hooks/hooks";
import {
  calculateAge,
  formatBirthday,
  formatPhoneWithRegex,
} from "../../utils/utils";
import { FaRegStar } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { usePersistedProfile } from "../../hooks/usePersisstedProfile";
import "./employeeProfile.scss";

function EmployeeProfile() {
  const navigate = useNavigate();

  const profile = useAppSelector((state) => state.employees.employeeProfile);
  const ageText = calculateAge(profile?.birthday);
  const phone = formatPhoneWithRegex(profile?.phone as string);
  const birthday = formatBirthday(profile?.birthday as string);

  const saveProfile = usePersistedProfile();
  useEffect(() => {
    if (profile) {
      saveProfile(profile);
    }
  }, [profile, saveProfile]);

  function handleBackClick() {
    localStorage.removeItem("employeeProfile");
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
            {birthday}
          </div>
          <span className="profile__years">{ageText}</span>
        </div>
        <div className="profile__phone">
          <BsTelephone className="profile__svg" />
          {phone}
        </div>
      </div>
    </div>
  );
}

export default EmployeeProfile;
