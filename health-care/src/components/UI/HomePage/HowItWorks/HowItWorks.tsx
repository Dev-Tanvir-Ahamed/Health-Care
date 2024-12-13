import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import HowItworks from "../../../../assets/how-it-works-img.png";
import appointment from "../../../../assets/icons/appointment-icon.png";
import charity from "../../../../assets/icons/charity-icon.png";
import checkDoctorProfile from "../../../../assets/icons/doctor-icon.png";
import seachDoctor from "../../../../assets/icons/search-icon.png";
const HowItWorks = () => {
  return (
    <Container>
      <Box my={5}>
        {/* heading */}
        <Box>
          <Typography variant="h6" color="primary">
            How it Works
          </Typography>
          <Typography variant="h4" fontWeight={700} my={2}>
            4 Easy Steps for get your solution
          </Typography>
          <Typography variant="body1" color="primary.body1" width={500} mb={5}>
            Access to expert physicians and surgeons, advanced technologies and
            top-quality surgery facilities right here.
          </Typography>
        </Box>
        {/* main content */}
        <Grid container spacing={5}>
          <Grid size={{ xl: 6 }}>
            <Image src={HowItworks} alt="img" />
          </Grid>
          <Grid size={{ xl: 6 }}>
            {/* stack - 1 */}
            <Stack direction={{ xs: "row" }} spacing={2} mb={3}>
              <Box
                sx={{
                  border: "2px solid #ddd",
                  width: "50%",
                  height: "250px",
                  borderRadius: "10px",
                }}
                p={4}
              >
                <Image src={checkDoctorProfile} alt="seachIcon" width={50} />
                <Typography variant="h5" fontWeight={500} my={2}>
                  Search Doctor
                </Typography>
                <Typography
                  fontWeight={300}
                  variant="body2"
                  color="primary.body1"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur nisi.
                </Typography>
              </Box>
              <Box
                sx={{
                  border: "2px solid #ddd",
                  width: "50%",
                  height: "250px",
                  borderRadius: "10px",
                }}
                p={4}
              >
                <Image src={seachDoctor} alt="seachIcon" width={50} />
                <Typography variant="h5" fontWeight={500} my={2}>
                  Check Doctor Profile
                </Typography>
                <Typography
                  fontWeight={300}
                  variant="body2"
                  color="primary.body1"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur nisi.
                </Typography>
              </Box>
            </Stack>
            {/* stack - 2 */}
            <Stack direction={{ xs: "row" }} spacing={2}>
              <Box
                sx={{
                  border: "2px solid #ddd",
                  width: "50%",
                  height: "250px",
                  borderRadius: "10px",
                }}
                p={4}
              >
                <Image src={appointment} alt="seachIcon" width={50} />
                <Typography variant="h5" fontWeight={500} my={2}>
                  Schedule Appointment
                </Typography>
                <Typography
                  fontWeight={300}
                  variant="body2"
                  color="primary.body1"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur nisi.
                </Typography>
              </Box>
              <Box
                sx={{
                  border: "2px solid #ddd",
                  width: "50%",
                  height: "250px",
                  borderRadius: "10px",
                }}
                p={4}
              >
                <Image src={charity} alt="seachIcon" width={50} />
                <Typography variant="h5" fontWeight={500} my={2}>
                  Get Your Solution
                </Typography>
                <Typography
                  fontWeight={300}
                  variant="body2"
                  color="primary.body1"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur nisi.
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HowItWorks;
