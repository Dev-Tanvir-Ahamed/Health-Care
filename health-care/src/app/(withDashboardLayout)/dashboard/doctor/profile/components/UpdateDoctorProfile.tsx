// "use client";
import MultiSelectChip from "@/app/(withDashboardLayout)/dashboard/doctor/profile/components/MultiSelectChip";
import InputForm from "@/components/Form/InputForm";
import PHForm from "@/components/Form/PHForm";
import SelectField from "@/components/Form/SelectField";
import FullScreenModal from "@/components/Shared/PHModal/PHFullScreenModal";
import {
  useGetSingleDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorsApi";
import { useGetSpecialistsQuery } from "@/redux/api/specialistsApi";
import { TProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
interface TPropsWithId extends TProps {
  id: string;
}
const validationSchema = z.object({
  experience: z.preprocess(
    (x) => (x ? x : undefined),
    z.coerce.number().int().optional()
  ),
  apointmentFee: z.preprocess(
    (x) => (x ? x : undefined),
    z.coerce.number().int().optional()
  ),
  name: z.string().optional(),
  contactNumber: z.string().optional(),
  registrationNumber: z.string().optional(),
  gender: z.string().optional(),
  qualification: z.string().optional(),
  currentWorkingPlace: z.string().optional(),
  designation: z.string().optional(),
});

const UpdateDoctorProfile = ({ open, setOpen, id }: TPropsWithId) => {
  const [specialitesIds, setSpecialitiesIds] = useState<string[]>([]);

  const {
    data,
    isLoading: isDoctorLoading,
    refetch,
  } = useGetSingleDoctorQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  const { data: specialitiesData, isLoading: isSpecialitiesLoading } =
    useGetSpecialistsQuery(undefined);
  const [updateDoctor] = useUpdateDoctorMutation();
  if (isDoctorLoading) {
    return <p>loading..</p>;
  }
  if (isSpecialitiesLoading) {
    return <p>loading..</p>;
  }
  const onSubmit = async (values: FieldValues) => {
    const doctorSpecialties = specialitesIds.map((specialtiesId: string) => ({
      specialtiesId,
      isDeleted: false,
    }));

    console.log({ id });
    // return;

    const excludedFields: Array<keyof typeof values> = [
      "email",
      "id",
      "role",
      "needPasswordChange",
      "status",
      "createdAt",
      "updatedAt",
      "isDeleted",
      "averageRating",
      "review",
      "profilePhoto",
      "registrationNumber",
      "schedules",
      "doctorSpecialties",
    ];

    const updatedValues = Object.fromEntries(
      Object.entries(values).filter(([key]) => {
        return !excludedFields.includes(key);
      })
    );

    console.log("update values", updatedValues);

    updatedValues.doctorSpecialties = doctorSpecialties;
    console.log(updatedValues);

    try {
      const res = await updateDoctor({ body: values, id }).unwrap();
      console.log(res);
      toast.success("Doctor Data Updated Succesfully");
      refetch();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FullScreenModal
      open={open}
      setOpen={setOpen}
      title="Update Doctor Profile"
    >
      <PHForm
        onSubmit={onSubmit}
        defaultValues={data || {}}
        resolver={zodResolver(validationSchema)}
      >
        <Box>
          <Stack spacing={4}>
            {/* grid - 1 */}
            <Grid container spacing={2}>
              <Grid size={{ xs: 4 }}>
                <InputForm fullWidth name="name" label="Name" />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <InputForm fullWidth name="email" label="Email" type="email" />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <InputForm
                  fullWidth
                  name="contactNumber"
                  label="Contact Number"
                />
              </Grid>
            </Grid>
            {/* grid - 2  */}
            <Grid container spacing={2}>
              <Grid size={{ xs: 4 }}>
                <InputForm fullWidth name="address" label="Address" />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <InputForm
                  fullWidth
                  name="registrationNumber"
                  label="Registration Number"
                />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <InputForm fullWidth name="experience" label="Experience" />
              </Grid>
            </Grid>
            {/* grid - 3  */}
            <Grid container spacing={2}>
              <Grid size={{ xs: 4 }}>
                <SelectField
                  name="gender"
                  label="Gender"
                  size="small"
                  options={[
                    { value: "MALE", label: "MALE" },
                    { value: "FEMALE", label: "FEMALE" },
                    { value: "OTHERS", label: "OTHERS" },
                  ]}
                />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <InputForm
                  fullWidth
                  name="apointmentFee"
                  label="Appointment Fee"
                />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <InputForm
                  fullWidth
                  name="qualification"
                  label="Qualification"
                />
              </Grid>
            </Grid>
            {/* grid - 4  */}
            <Grid container spacing={2}>
              <Grid size={{ xs: 4 }}>
                <InputForm
                  fullWidth
                  name="currentWorkingPlace"
                  label="Currernt Working Place"
                />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <InputForm fullWidth name="designation" label="Designation" />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <MultiSelectChip
                  secialitiesData={specialitiesData}
                  specialitesIds={specialitesIds}
                  setSpecialitiesIds={setSpecialitiesIds}
                />
              </Grid>
            </Grid>
            <Button type="submit">Save Changes</Button>
          </Stack>
        </Box>
      </PHForm>
    </FullScreenModal>
  );
};

export default UpdateDoctorProfile;
