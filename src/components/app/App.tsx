import { Provider } from "react-redux";
import { store } from "../../store/store";
import EmployeesList from "../employeesList/EmployeesList";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <EmployeesList />
      </Provider>
    </div>
  );
}

export default App;
