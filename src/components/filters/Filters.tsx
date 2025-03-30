import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { setTab } from "../../slices/slice";
import "./filters.scss";

const FILTERS = [
  { department: "Все", key: "Все" },
  { department: "Designers", key: "design" },
  { department: "Analysts", key: "analytics" },
  { department: "Managers", key: "management" },
  { department: "iOS", key: "ios" },
  { department: "Android", key: "android" },
];

function Filters() {
  const tab = useAppSelector((state) => state.employees.tabs);
  const dispatch = useAppDispatch();

  const handleTabClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const value = e.currentTarget.dataset.value;
    if (value) {
      dispatch(setTab(value));
    }
  };

  const renderFilters = FILTERS.map((item) => {
    return (
      <li
        className={
          tab === item.key
            ? "filters__item filters__item-active"
            : "filters__item"
        }
        key={item.department}
        data-value={item.key}
        onClick={(e) => handleTabClick(e)}
      >
        {item.department}
      </li>
    );
  });

  return <ul className="filters">{renderFilters}</ul>;
}

export default Filters;
