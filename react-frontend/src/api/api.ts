import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "jiraApiReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://task-hive-j39y.onrender.com/api",
    // baseUrl: "http://localhost:5000/api/",
    credentials: "include",
  }),
  tagTypes: ["Lists", "Issues", "Project", "Members", "AuthUser", "Comments"],
  endpoints: (builder) => ({}),
});

export const {} = api;
