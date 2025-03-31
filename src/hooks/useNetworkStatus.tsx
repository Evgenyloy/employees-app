import { useState, useEffect } from "react";
import { useGetEmployeesQuery } from "../api/apiSlice";

export function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { refetch } = useGetEmployeesQuery(null);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      refetch();
    };
    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return { isOnline };
}
