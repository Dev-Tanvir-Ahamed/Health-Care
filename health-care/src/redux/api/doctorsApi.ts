/* eslint-disable @typescript-eslint/no-explicit-any */
import { DoctorsResponse, TDoctor, TMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const doctorsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDoctors: builder.mutation({
      query: (data) => ({
        url: "/user/create-doctor",
        method: "POST",
        ConTentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.doctor],
    }),
    getAllDoctors: builder.query({
      query: (args: Record<string, any>) => ({
        url: "/doctor",
        method: "GET",
        params: args,
      }),
      transformResponse: (response: DoctorsResponse[], meta: TMeta) => {
        return {
          doctors: response,
          meta,
        };
      },
      providesTags: [tagTypes.doctor],
    }),
    // get single doctor
    getSingleDoctor: builder.query({
      query: (id) => ({
        url: `/doctor/${id}`,
        method: "GET",
      }),
      transformResponse: (response: TDoctor) => {
        return response;
      },
      providesTags: (result, error, id) => [{ type: tagTypes.doctor, id }],
    }),
    // update doctor data
    updateDoctor: builder.mutation({
      query: (data) => ({
        url: `/doctor/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: tagTypes.doctor, id },
      ],
    }),
    deleteDoctor: builder.mutation({
      query: (id: string) => ({
        url: `/doctor/soft/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response) => {
        // Ensure the response is wrapped in `data`
        return { data: response };
      },
      invalidatesTags: [tagTypes.doctor],
    }),
  }),
});

export const {
  useCreateDoctorsMutation,
  useGetAllDoctorsQuery,
  useDeleteDoctorMutation,
  useGetSingleDoctorQuery,
  useUpdateDoctorMutation,
} = doctorsApi;
