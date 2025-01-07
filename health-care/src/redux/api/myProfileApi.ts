import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const myProfileAPi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyProfile: build.query({
      query: () => {
        return {
          url: "/user/me",
          method: "GET",
        };
      },
      transformResponse: (response: any) => {
        return {
          data: response,
        };
      },
      providesTags: [tagTypes.user],
    }),
    updataMyProfile: build.mutation({
      query: (data) => {
        return {
          url: "/user/update-my-profile",
          method: "PATCH",
          data,
          ContentType: "multipart/form-data",
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetMyProfileQuery, useUpdataMyProfileMutation } =
  myProfileAPi;
