import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setPopUpIsOpen, setPopUpSort } from "../../slices/slice";
import "./sortPopup.scss";

function SortPopup() {
  const dispatch = useAppDispatch();
  const popUpIsOpen = useAppSelector((state) => state.employees.popUpIsOpen);
  const [selectedSort, setSelectedSort] = useState("");

  function handleSelectSort(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedSort(e.target.value);
    dispatch(setPopUpSort(e.target.value));
    dispatch(setPopUpIsOpen(false));
  }

  function handleClosePopUp() {
    dispatch(setPopUpIsOpen(false));
  }

  if (!popUpIsOpen) return null;

  return (
    <div className="sort-popup-overlay">
      <div className="sort-popup">
        <div className="sort-popup__header">
          <h3 className="sort-popup__title">Сортировка</h3>
          <button
            className="sort-popup__close"
            onClick={handleClosePopUp}
            aria-label="Закрыть окно сортировки"
          >
            &times;
          </button>
        </div>

        <div className="sort-popup__options">
          <label className="sort-popup__option">
            <input
              type="radio"
              name="sort"
              value="alphabetical"
              checked={selectedSort === "alphabetical"}
              onChange={handleSelectSort}
            />
            <span className="sort-popup__radio-custom"></span>
            По алфавиту
          </label>

          <label className="sort-popup__option">
            <input
              type="radio"
              name="sort"
              value="birthday"
              checked={selectedSort === "birthday"}
              onChange={handleSelectSort}
            />
            <span className="sort-popup__radio-custom"></span>
            По дню рождения
          </label>
        </div>
      </div>
    </div>
  );
}

export default SortPopup;
