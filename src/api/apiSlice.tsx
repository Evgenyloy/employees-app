import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IEmployee } from "../types/types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stoplight.io",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }),

  endpoints: (builder) => ({
    getEmployees: builder.query<IEmployee[], unknown>({
      query: () => ({
        url: `/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all`,
      }),
      transformResponse: (response: any) => {
        return [...response.items];
      },
    }),
  }),
});

export const { useGetEmployeesQuery } = apiSlice;
