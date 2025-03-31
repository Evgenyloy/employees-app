import "./reconnection.scss";

interface IReconnectionProps {
  isOnline: boolean;
}

function Reconnection({ isOnline }: IReconnectionProps) {
  console.log(isOnline);

  return (
    <div
      className={
        isOnline
          ? "reconnection reconnection-online"
          : "reconnection reconnection-offline"
      }
    >
      {" "}
      <h2 className="reconnection__title">Поиск</h2>{" "}
      <p className="reconnection__text">
        {" "}
        {isOnline
          ? "Секундочку, гружусь..."
          : "Не могу обновить данные. Проверь соединение с интернетом."}
      </p>{" "}
    </div>
  );
}

export default Reconnection;
