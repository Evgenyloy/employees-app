import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import EmployeesList from "../employeesList/EmployeesList";
import Filters from "../filters/Filters";
import Search from "../search/Search";
import SortPopup from "../SortPopup/SortPopup";
import EmployeeProfile from "../employeeProfile/EmployeeProfile";
import MainLayout from "../mainLayout/MainLayout";
import Reconnection from "../reconnection/Reconnection";
import { useNetworkStatus } from "../../hooks/useNetworkStatus";
import "./app.scss";

function App() {
  const { isOnline } = useNetworkStatus();

  return (
    <Router>
      <div className="app">
        <Provider store={store}>
          <Reconnection isOnline={isOnline} />
          <Search />
          <Filters />
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<EmployeesList />} />
              <Route path="profile/:id" element={<EmployeeProfile />} />
            </Route>
          </Routes>
          <SortPopup />
        </Provider>
      </div>
    </Router>
  );
}

export default App;
