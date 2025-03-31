import { IEmployee } from "../../types/types";

export function groupEmployeesByYear(employees: IEmployee[]) {
  const grouped: { [year: string]: IEmployee[] } = {};

  employees?.forEach((employee) => {
    const year = employee.birthday.split("-")[0];

    if (!grouped[year]) {
      grouped[year] = [];
    }

    grouped[year].push(employee);
  });

  return grouped;
}

export function filterByTab(employees: IEmployee[], filter: string) {
  if (!employees) return [];
  if (filter === "Все") return employees;
  return employees.filter((item) => item.department === filter);
}

export function filterBySearch(employees: IEmployee[], filter: string) {
  return employees.filter(
    (item) =>
      item.firstName.toLowerCase().startsWith(filter.toLowerCase()) ||
      item.lastName.toLowerCase().startsWith(filter.toLowerCase()) ||
      item.userTag.toLowerCase().startsWith(filter.toLowerCase())
  );
}

export function sortEmployees(
  employees: IEmployee[],
  filter: string
): IEmployee[] {
  const sorted = [...employees];

  switch (filter) {
    case "alphabetical":
      return sorted.sort((a, b) => {
        if (a.firstName > b.firstName) {
          return 1;
        }
        if (a.firstName < b.firstName) {
          return -1;
        }
        return 0;
      });

    case "birthday":
      return sorted.sort(
        (a, b) =>
          new Date(a.birthday).getTime() - new Date(b.birthday).getTime()
      );

    default:
      return sorted;
  }
}
