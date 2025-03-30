import { Provider } from "react-redux";
import { store } from "../../store/store";
import EmployeesList from "../employeesList/EmployeesList";
import Filters from "../filters/Filters";
import Search from "../search/Search";
import SortPopup from "../SortPopup/SortPopup";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Search />
        <Filters />
        <EmployeesList />
        <SortPopup />
      </Provider>
    </div>
  );
}

export default App;
