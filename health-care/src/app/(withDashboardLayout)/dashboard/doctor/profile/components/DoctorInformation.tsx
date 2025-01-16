"use client";
import { Box, Stack, styled, Typography } from "@mui/material";
const StyleInformationBox = styled(Box)(({ theme }) => ({
  background: "#f4f7fe",
  borderRadius: theme.spacing(1),
  width: "45%",
  padding: "8px 16px",
  marginBottom: "20px",
  "& p": {
    fontWeight: 600,
  },
}));
const DoctorInformation = ({ data }: any) => {
  return (
    <>
      <Typography variant="h4" color="primary.main" my={2}>
        Basic Information
      </Typography>
      <Stack direction="row" gap={2}>
        <StyleInformationBox>
          <Typography color="secondary" variant="caption">
            Role :{" "}
          </Typography>
          <Typography>{data?.role}</Typography>
        </StyleInformationBox>
        <StyleInformationBox>
          <Typography color="secondary" variant="caption">
            Name :{" "}
          </Typography>
          <Typography>{data?.name}</Typography>
        </StyleInformationBox>
      </Stack>
      {/* stack - 2 */}
      <Stack direction="row" gap={2}>
        <StyleInformationBox>
          <Typography color="secondary" variant="caption">
            Email :{" "}
          </Typography>
          <Typography>{data?.email}</Typography>
        </StyleInformationBox>
        <StyleInformationBox>
          <Typography color="secondary" variant="caption">
            Gender :{" "}
          </Typography>
          <Typography>{data?.gender}</Typography>
        </StyleInformationBox>
      </Stack>
      {/* stack - 3 */}
      <Stack>
        <StyleInformationBox>
          <Typography color="secondary" variant="caption">
            Description :{" "}
          </Typography>
          <Typography>{data?.designation}</Typography>
        </StyleInformationBox>
      </Stack>
      {/* professional information */}
      <Typography variant="h4" color="primary.main" my={2}>
        Professional Information
      </Typography>
      {/* stack -4 */}
      <Stack direction="row" gap={2}>
        <StyleInformationBox>
          <Typography color="secondary" variant="caption">
            Appoinment Fee :{" "}
          </Typography>
          <Typography>{data?.apointmentFee}</Typography>
        </StyleInformationBox>
        <StyleInformationBox>
          <Typography color="secondary" variant="caption">
            Qualification :{" "}
          </Typography>
          <Typography>{data?.qualification}</Typography>
        </StyleInformationBox>
      </Stack>
      {/* stack -5 */}
      <Stack direction="row" gap={2}>
        <StyleInformationBox>
          <Typography color="secondary" variant="caption">
            Current Working Place :{" "}
          </Typography>
          <Typography>{data?.currentWorkingPlace}</Typography>
        </StyleInformationBox>
        <StyleInformationBox>
          <Typography color="secondary" variant="caption">
            Status :{" "}
          </Typography>
          <Typography>{data?.status}</Typography>
        </StyleInformationBox>
      </Stack>
      {/* stack -6 */}
      <Stack>
        <StyleInformationBox>
          <Typography color="secondary" variant="caption">
            Experience :{" "}
          </Typography>
          <Typography>{data?.experience}</Typography>
        </StyleInformationBox>
      </Stack>
    </>
  );
};

export default DoctorInformation;
