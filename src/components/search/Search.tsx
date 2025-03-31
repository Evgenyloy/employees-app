import { FiSearch } from "react-icons/fi";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { setInput, setPopUpIsOpen } from "../../slices/slice";
import ThemeToggle from "../themeToggle/ThemeToggle";
import "./search.scss";

function Search() {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    dispatch(setInput(e.target.value));
  }

  const handleOpenPopUp = () => {
    dispatch(setPopUpIsOpen(true));
  };

  return (
    <div className="search">
      <div className="search__title-wrapper">
        <h1 className="search__title">Поиск</h1>
        <ThemeToggle />
      </div>
      <div className="search__input-wrapper">
        <FiSearch className="search__svg" />
        <input
          className="search__input"
          type="text"
          placeholder="Введите имя, фамилию или инициалы."
          value={value}
          onChange={handleInputChange}
        />
        <LuMenu className="search__menu-svg" onClick={handleOpenPopUp} />
      </div>
    </div>
  );
}

export default Search;
