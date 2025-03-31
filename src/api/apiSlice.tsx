import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IEmployee } from "../types/types";

const error = "__code=500&__dynamic=true";
const all = "__example=all";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }),

  endpoints: (builder) => ({
    getEmployees: builder.query<IEmployee[], unknown>({
      query: () => ({
        url: `/users?__example=all`,
      }),
      keepUnusedDataFor: 300,
      transformResponse: (response: any) => {
        return [...response.items];
      },
    }),
  }),
});

export const { useGetEmployeesQuery, useLazyGetEmployeesQuery } = apiSlice;
