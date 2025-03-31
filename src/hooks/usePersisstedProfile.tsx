import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { setEmployeeProfile } from "../slices/slice";

export function usePersistedProfile() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const savedProfile = localStorage.getItem("employeeProfile");
    if (savedProfile) {
      dispatch(setEmployeeProfile(JSON.parse(savedProfile)));
    }
  }, [dispatch]);

  return (profile: any) => {
    localStorage.setItem("employeeProfile", JSON.stringify(profile));
  };
}
