/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-async-client-component */
"use client";
import InputForm from "@/components/Form/InputForm";
import PHFileUploader from "@/components/Form/PHFileUpload";
import PHForm from "@/components/Form/PHForm";
import SelectField from "@/components/Form/SelectField";
import {
  useGetSingleDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorsApi";
import { Box, Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import DoctorUpdateSkeleton from "./DoctorUpdateSkelton";
// Define the structure of PageProps for this page

const DoctorUpdatePage = ({ params }: any) => {
  const { doctorId } = params;

  // Use the skip option to prevent the query from running if doctorId is null
  const { data, isLoading } = useGetSingleDoctorQuery(doctorId || "", {
    skip: !doctorId, // Skip the query if doctorId is not available
  });
  const [updateDoctor] = useUpdateDoctorMutation();

  const handleSubmit = async (values: FieldValues) => {
    values.experience = Number(values.experience);
    values.apointmentFee = Number(values.apointmentFee);
    values.id = doctorId;
    console.log(values);
    console.log({ id: doctorId, body: values });

    try {
      const res = await updateDoctor({ id: doctorId, body: values }).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Doctor Updated Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const defaultValues = {
    name: data?.name || "",
    email: data?.email || "",
    contactNumber: data?.contactNumber || 0,
    address: data?.address || "",
    registrationNumber: data?.registrationNumber || "",
    experience: data?.experience || 0,
    gender: data?.gender || "",
    apointmentFee: data?.apointmentFee || 0,
    qualification: data?.qualification || "",
    currentWorkingPlace: data?.currentWorkingPlace || "",
    designation: data?.designation || "",
  };

  const handleUploadFile = (file: File) => {
    console.log(file);
  };

  return (
    <Box>
      {isLoading ? (
        <DoctorUpdateSkeleton />
      ) : (
        <PHForm onSubmit={handleSubmit} defaultValues={data && defaultValues}>
          <Box>
            <Stack spacing={4}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ height: "150px", width: "150px" }}>
                  <Image
                    src={data?.profilePhoto || "/placeholder-image.png"}
                    alt="Profile Photo"
                    width={150}
                    height={150}
                  />
                </Box>
                <PHFileUploader
                  onFileUpload={handleUploadFile}
                  name="file"
                  label="Upload Doctor Image"
                />
              </Box>
              {/* grid - 1 */}
              <Grid container spacing={2}>
                <Grid size={{ xs: 4 }}>
                  <InputForm fullWidth name="name" label="Name" />
                </Grid>
                <Grid size={{ xs: 4 }}>
                  <InputForm
                    fullWidth
                    name="email"
                    label="Email"
                    type="email"
                  />
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
              </Grid>
              <Button type="submit">Submit</Button>
            </Stack>
          </Box>
        </PHForm>
      )}
    </Box>
  );
};

export default DoctorUpdatePage;
