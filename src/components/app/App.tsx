import { HashRouter as Router, Route, Routes } from "react-router-dom";
import EmployeesList from "../employeesList/EmployeesList";
import Filters from "../filters/Filters";
import Search from "../search/Search";
import SortPopup from "../SortPopup/SortPopup";
import EmployeeProfile from "../employeeProfile/EmployeeProfile";
import MainLayout from "../mainLayout/MainLayout";
import Reconnection from "../reconnection/Reconnection";
import { useNetworkStatus } from "../../hooks/useNetworkStatus";
import { useGetEmployeesQuery } from "../../api/apiSlice";
import "./app.scss";

function App() {
  const { isOnline } = useNetworkStatus();
  const { isFetching } = useGetEmployeesQuery(null, {
    skip: !isOnline,
  });

  return (
    <Router>
      <div className="app">
        {!isOnline ? (
          <Reconnection isOnline={false} />
        ) : isFetching ? (
          <Reconnection isOnline={true} />
        ) : (
          <Search />
        )}
        <Filters />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<EmployeesList />} />
            <Route path="profile/:id" element={<EmployeeProfile />} />
          </Route>
        </Routes>
        <SortPopup />
      </div>
    </Router>
  );
}

export default App;
