/* eslint-disable @typescript-eslint/no-unused-vars */
import { formatDate } from "@/utils/formatDate";
import { Box, Typography } from "@mui/material";
interface DoctorsScheduleSlotsProps {
  id: string;
}
const DoctorsScheduleSlots = async ({ id }: DoctorsScheduleSlotsProps) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/doctor-schedule/${id}`
  );
  const data = await res.json();
  console.log(data);
  //   const doctorAvailableSlot = data?.schedules?.map((scheduleId) => scheduleId)

  return (
    <Box mb={5}>
      <Typography component="h1" variant="h3" color="primary.main" mb={5 + 3}>
        Availibility
      </Typography>
      <Typography fontWeight="bold" variant="h6">
        Today {formatDate(new Date().toString())} -{" "}
        {new Date().toLocaleDateString("en-US", { weekday: "long" })}
      </Typography>
    </Box>
  );
};

export default DoctorsScheduleSlots;
