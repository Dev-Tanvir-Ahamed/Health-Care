import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Button, Stack } from "@mui/material";
import Image from "next/image";

interface Doctor {
  id: string;
  name: string;
  profilePhoto: string;
  qualification: string;
  designation: string;
  address: string;
}

const DoctorCard = ({ data }: { data: Doctor[] }) => {
  return (
    <Stack direction="row" gap={3} sx={{}}>
      {data.map((item: Doctor) => {
        return (
          <Box key={item.id} sx={{ background: "white" }} pb={4}>
            <Box
              sx={{
                width: "100%",
                height: "400px",

                "& img": {
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  objectFit: "cover",
                },
              }}
            >
              {item.profilePhoto && (
                <Image
                  src={item.profilePhoto}
                  alt={item.name || "Doctor's profile image"}
                  width={350}
                  height={200}
                  className="object-contain"
                />
              )}
            </Box>
            <div className="ml-3">
              <p className="text-2xl font-bold mt-3 mb-1">{item.name}</p>
              <div className="flex gap-2 text-small text-gray-500">
                <p>{item.qualification} - </p>
                <p>{item.designation}</p>
              </div>
              <div className="flex py-2 gap-2">
                <LocationOnIcon />
                <p>{item.address}</p>
              </div>
            </div>
            <div className="flex justify-around mt-3">
              <Button className="">Book Now</Button>
              <Button className="" variant="outlined">
                View Profile
              </Button>
            </div>
          </Box>
        );
      })}
    </Stack>
  );
};

export default DoctorCard;
