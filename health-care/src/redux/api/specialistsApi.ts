import { TSpecialty } from "@/types/specialities";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const specialistsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecialists: build.mutation({
      query: (data) => ({
        url: "/specialties",
        method: "POST",
        ConTentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.specialisties],
    }),
    getSpecialists: build.query({
      query: () => ({
        url: "/specialties",
        method: "GET",
      }),
      transformResponse: (response: TSpecialty[]) => {
        return response;
      },
      providesTags: [tagTypes.specialisties],
    }),
    deleteSpecialists: build.mutation({
      query: (id) => ({
        url: `/specialties/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.specialisties],
    }),
  }),
});

export const {
  useCreateSpecialistsMutation,
  useGetSpecialistsQuery,
  useDeleteSpecialistsMutation,
} = specialistsApi;
