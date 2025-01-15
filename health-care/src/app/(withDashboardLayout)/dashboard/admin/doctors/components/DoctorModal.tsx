import InputForm from "@/components/Form/InputForm";
import PHFileUploader from "@/components/Form/PHFileUpload";
import PHForm from "@/components/Form/PHForm";
import MultiChipField from "@/components/Form/PHMultiChipSelect";
import SelectField from "@/components/Form/SelectField";
import FullScreenModal from "@/components/Shared/PHModal/PHFullScreenModal";
import { useCreateDoctorsMutation } from "@/redux/api/doctorsApi";
import { useGetSpecialistsQuery } from "@/redux/api/specialistsApi";
import { modifyData } from "@/utils/modifyData";
import { Box, Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { FieldValues } from "react-hook-form";
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
};
const DoctorModal = ({ open, setOpen }: TProps) => {
  const [createDoctors, { data, isLoading: uploadImage }] =
    useCreateDoctorsMutation();
  console.log("create doctor data", data);
  const { data: specialitiesData } = useGetSpecialistsQuery(undefined);

  // State for image preview and file
  // const [imagePreview, setImagePreview] = useState<string | null>(null);
  // const [imageFile, setImageFile] = useState<File | null>(null);

  const handleSubmit = async (values: FieldValues) => {
    console.log("values", values);

    values.doctor.experience = Number(values.doctor.experience);
    values.doctor.apointmentFee = Number(values.doctor.apointmentFee);

    // Add the image file to the data if available
    // if (imageFile) {
    //   values.doctor.profilePhoto = imageFile;
    // }

    const data = modifyData(values);
    console.log("modifyData", data);

    try {
      const res = await createDoctors(data);
      console.log(res);
      // if (res?.data?.id) {
      //   toast.success("Doctor Created Successfully");
      //   setOpen(false);
      // }
      // console.log(res);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const handleUploadFile = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));
    createDoctors(formData);
  };

  const defaultValues = {
    password: "123456",
    doctor: {
      name: "Dr. Tanvir",
      email: "doctortanvir@gmail.com",
      profilePhoto: null,
      contactNumber: "+1234567890",
      address: "123 Medical Street, Cityville",
      registrationNumber: "12345",
      experience: 5,
      gender: "MALE",
      apointmentFee: 100,
      qualification: "MD, PhD",
      currentWorkingPlace: "City Hospital",
      designation: "Senior Consultant",
      doctorSpecialties: [],
    },
  };
  // const profilePhoto = data?.profilePhoto ? data?.profilePhoto : data?.name;
  return (
    <FullScreenModal
      open={open}
      setOpen={setOpen}
      title="Create a A New Doctor"
    >
      <PHForm onSubmit={handleSubmit} defaultValues={defaultValues}>
        <Box>
          <Stack spacing={4}>
            {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  height: "150px",
                  width: "150px",
                  objectFit: "cover",
                  overflow: "hidden",
                }}
              >
                {imagePreview ? (
                  <Image
                    src={imagePreview}
                    alt="Profile Photo"
                    width={150}
                    height={150}
                  />
                ) : (
                  <Box
                    sx={{
                      border: "1px solid black",
                      height: "150px",
                      width: "150px",
                    }}
                  ></Box>
                )}
              </Box>
              <PHFileUploader
                onFileUpload={handleUploadFile}
                name="file"
                label="Upload Doctor Image"
              />
            </Box> */}
            <Box my={3}>
              {uploadImage ? (
                <p>Uploading</p>
              ) : (
                <PHFileUploader
                  name="file"
                  label="Choose Your Profile Photo"
                  onFileUpload={handleUploadFile}
                  varient="text"
                />
              )}
            </Box>
            {/* grid - 1 */}
            <Grid container spacing={2}>
              <Grid size={{ xs: 4 }}>
                <InputForm fullWidth name="doctor.name" label="Name" />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <InputForm
                  fullWidth
                  name="doctor.email"
                  label="Email"
                  type="email"
                />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <InputForm
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                />
              </Grid>
            </Grid>
            {/* grid - 2  */}
            <Grid container spacing={2}>
              <Grid size={{ xs: 4 }}>
                <InputForm
                  fullWidth
                  name="doctor.contactNumber"
                  label="Contact Number"
                />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <InputForm fullWidth name="doctor.address" label="Address" />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <InputForm
                  fullWidth
                  name="doctor.registrationNumber"
                  label="Registration Number"
                />
              </Grid>
            </Grid>
            {/* grid - 3  */}
            <Grid container spacing={2}>
              <Grid size={{ xs: 4 }}>
                <InputForm
                  fullWidth
                  name="doctor.experience"
                  label="Experience"
                />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <SelectField
                  name="doctor.gender"
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
                  name="doctor.apointmentFee"
                  label="Registration Number"
                />
              </Grid>
            </Grid>
            {/* grid - 4  */}
            <Grid container spacing={2}>
              <Grid size={{ xs: 4 }}>
                <InputForm
                  fullWidth
                  name="doctor.qualification"
                  label="Qualification"
                />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <InputForm
                  fullWidth
                  name="doctor.currentWorkingPlace"
                  label="Currernt Working Place"
                />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <InputForm
                  fullWidth
                  name="doctor.designation"
                  label="Designation"
                />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <MultiChipField
                  name="doctor.doctorSpecialties"
                  label="Select Multiple Options"
                  options={
                    specialitiesData?.map((item) => ({
                      value: item.id,
                      label: item.title,
                    })) || []
                  }
                  size="medium"
                />
              </Grid>
            </Grid>
            <Button type="submit">Submit</Button>
          </Stack>
        </Box>
      </PHForm>
    </FullScreenModal>
  );
};

export default DoctorModal;
