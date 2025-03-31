import "./searchError.scss";
import errorSearch from "../../image/error-search.png";

function SearchError() {
  return (
    <div className="error-search">
      <img
        className="error-search__image"
        src={errorSearch}
        alt="Мы никого не нашли"
      />
      <h2 className="error-search__title">Мы никого не нашли</h2>
      <p className="error-search__text">Попробуй скорректировать запрос</p>
    </div>
  );
}

export default SearchError;
