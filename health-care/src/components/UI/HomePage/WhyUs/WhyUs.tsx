import assets from "@/assets";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2"; // For Grid v2
import Image from "next/image";
import chooseUsImg from "../../../../assets/choose-us.png";
const WhyUs = () => {
  const servicesData = [
    {
      imageSrc: assets.svgs.award,
      title: "Award Winning Service",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
      imageSrc: assets.svgs.care,
      title: "Best Quality Pregnancy Care",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
      imageSrc: assets.svgs.equipment,
      title: "Complete Medical Equipments",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
      imageSrc: assets.svgs.call,
      title: "Dedicated Emergency Care",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
  ];
  return (
    <Container>
      <Box sx={{ textAlign: "center" }} my={5}>
        <Typography variant="h6" fontWeight={700} color="primary">
          Why us
        </Typography>
        <Typography variant="h4" fontWeight={700}>
          Why choose us
        </Typography>
      </Box>
      <Grid container spacing={5}>
        <Grid size={{ md: 6 }} spacing={2}>
          {/* box - 1 */}
          <Box
            sx={{
              background: "rgba(20,20,20, 0.1)",
              display: "flex",
              gap: "15px",
              alignItems: "center",
              padding: "20px",
              borderRadius: "10px 10px 100px 10px",
            }}
            my={3}
          >
            <Box sx={{ background: "white" }} p={1}>
              <Image src={servicesData[0].imageSrc} width={50} alt="img" />
            </Box>
            <Box>
              <Typography variant="h5" fontWeight={600}>
                {servicesData[0].title}
              </Typography>
              <Typography
                fontWeight={300}
                variant="body2"
                color="primary.body1"
                py={1}
              >
                {servicesData[0].description}
              </Typography>
            </Box>
          </Box>
          {/* box - 2 */}
          <Box
            sx={{
              background: "rgba(20,20,20, 0.1)",
              display: "flex",
              gap: "15px",
              alignItems: "center",
              padding: "20px",
              borderRadius: "10px 100px 10px 10px",
            }}
            mb={3}
          >
            <Box sx={{ background: "white" }} p={1}>
              <Image src={servicesData[0].imageSrc} width={50} alt="img" />
            </Box>
            <Box>
              <Typography variant="h5" fontWeight={600}>
                {servicesData[1].title}
              </Typography>
              <Typography
                fontWeight={300}
                variant="body2"
                color="primary.body1"
                py={1}
              >
                {servicesData[0].description}
              </Typography>
            </Box>
          </Box>
          {/* box - 3 */}
          <Box
            sx={{
              background: "rgba(20,20,20, 0.1)",
              display: "flex",
              gap: "15px",
              alignItems: "center",
              padding: "20px",
              borderRadius: "10px 10px 100px 10px",
            }}
            mb={3}
          >
            <Box sx={{ background: "white" }} p={1}>
              <Image src={servicesData[2].imageSrc} width={50} alt="img" />
            </Box>
            <Box>
              <Typography variant="h5" fontWeight={600}>
                {servicesData[0].title}
              </Typography>
              <Typography
                fontWeight={300}
                variant="body2"
                color="primary.body1"
                py={1}
              >
                {servicesData[0].description}
              </Typography>
            </Box>
          </Box>
          {/* box - 4 */}
          <Box
            sx={{
              background: "rgba(20,20,20, 0.1)",
              display: "flex",
              gap: "15px",
              alignItems: "center",
              padding: "20px",
              borderRadius: "10px 100px 10px 10px",
            }}
            mb={5}
          >
            <Box sx={{ background: "white" }} p={1}>
              <Image src={servicesData[3].imageSrc} width={50} alt="img" />
            </Box>
            <Box>
              <Typography variant="h5" fontWeight={600}>
                {servicesData[0].title}
              </Typography>
              <Typography
                fontWeight={300}
                variant="body2"
                color="primary.body1"
                py={1}
              >
                {servicesData[0].description}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ md: 6 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "550px",
            }}
          >
            <Image src={chooseUsImg} alt="chooseusImg" width={400} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyUs;
