import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleUser: build.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      transformResponse: (response) => {
        return {
          data: response,
        };
      },
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetSingleUserQuery } = userApi;
