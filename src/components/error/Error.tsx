import "./error.scss";
import errorImg from "./error.png";
import { useLazyGetEmployeesQuery } from "../../api/apiSlice";

function Error() {
  const [trigger] = useLazyGetEmployeesQuery();
  function handleRefetchOne() {
    trigger(null);
  }
  return (
    <section className="error">
      <div className="error__wrapper">
        <img
          className="error__image"
          src={errorImg}
          alt="Ошибка: что-то пошло не так"
        />
        <h1 className="error__title">Какой-то сверхразум все сломал</h1>
        <p className="error__description">Постараемся быстро починить</p>
        <button className="error__retry-button" onClick={handleRefetchOne}>
          Попробовать снова
        </button>
      </div>
    </section>
  );
}

export default Error;
