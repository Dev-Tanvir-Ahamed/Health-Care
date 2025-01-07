"use client";

import PHFileUploader from "@/components/Form/PHFileUpload";
import {
  useGetMyProfileQuery,
  useUpdataMyProfileMutation,
} from "@/redux/api/myProfileApi";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { useState } from "react";
import DoctorInformation from "./components/DoctorInformation";
import UpdateDoctorProfile from "./components/UpdateDoctorProfile";
const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading } = useGetMyProfileQuery(undefined);
  console.log(data);

  const [updateMYProfile, { data: updateData, isLoading: updating }] =
    useUpdataMyProfileMutation();

  const fileUploadHandler = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));

    updateMYProfile(formData);
  };

  console.log(updateData);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const profilePhoto = data?.data?.profilePhoto
    ? data?.data?.profilePhoto
    : data?.data?.name;

  return (
    <>
      <UpdateDoctorProfile
        open={isModalOpen}
        setOpen={setIsModalOpen}
        id={data?.data?.id}
      />
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                height: 300,
                width: "100%",
                overflow: "hidden",
                borderRadius: 1,
              }}
            >
              <Image
                height={300}
                width={400}
                src={profilePhoto}
                alt="User Photo"
              />
            </Box>
            <Box my={3}>
              {updating ? (
                <p>Uploading</p>
              ) : (
                <PHFileUploader
                  name="file"
                  label="Choose Your Profile Photo"
                  onFileUpload={fileUploadHandler}
                  varient="text"
                />
              )}
            </Box>

            <Button
              fullWidth
              endIcon={<ModeEditIcon />}
              onClick={() => setIsModalOpen(true)}
            >
              Edit Profile
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            {data ? (
              <DoctorInformation data={data} />
            ) : (
              <Typography>No doctor information available.</Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
