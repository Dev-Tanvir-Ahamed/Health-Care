import PHModal from "@/components/Shared/PHModal/PHModal";
import { useGetAllSchedulesQuery } from "@/redux/api/scheduleApi";
import LoadingButton from "@mui/lab/LoadingButton";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useState } from "react";

import { useCreateDoctorScheduleMutation } from "@/redux/api/doctorSchedule";
import { Stack } from "@mui/material";
import MultiSelect from "./MultiSelect";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorScheduleModal = ({ open, setOpen }: TProps) => {
  const [createDoctorSchedule, { isLoading }] =
    useCreateDoctorScheduleMutation();
  const [selectedDate, setSelectedDate] = useState(
    dayjs(new Date()).toISOString()
  );

  const [scheduleIDs, setScheduleIDs] = useState<string[]>([]);
  // console.log(scheduleIDs);

  const query: Record<string, any> = {};

  if (selectedDate) {
    query["startDate"] = dayjs(selectedDate)
      .hour(0)
      .minute(0)
      .millisecond(0)
      .toISOString();
    query["endDate"] = dayjs(selectedDate)
      .hour(23)
      .minute(59)
      .millisecond(999)
      .toISOString();
  }

  const { data } = useGetAllSchedulesQuery(query);
  console.log(data);
  const schedules = data?.schedules;
  const onSubmit = async () => {
    try {
      const res = await createDoctorSchedule({
        scheduleIds: scheduleIDs,
      });
      console.log(res);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
      <Stack direction={"column"} gap={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Controlled picker"
            value={dayjs(selectedDate)}
            onChange={(newValue) =>
              setSelectedDate(dayjs(newValue).toISOString())
            }
            sx={{ width: "100%" }}
          />
        </LocalizationProvider>
        <MultiSelect
          schedules={schedules}
          scheduleIDs={scheduleIDs}
          setScheduleIDs={setScheduleIDs}
        />
        <LoadingButton
          size="small"
          loading={isLoading}
          loadingIndicator="Loading…"
          variant="contained"
          onClick={onSubmit}
        >
          Submit
        </LoadingButton>
        {/* <MultipleSelectFieldChip
          schedules={schedules}
          selectedScheduleIds={selectedScheduleIds}
          setSelectedScheduleIds={setSelectedScheduleIds}
        />

        <LoadingButton
          size="small"
          onClick={onSubmit}
          loading={isLoading}
          loadingIndicator="Submitting..."
          variant="contained"
        >
          <span>Submit</span>
        </LoadingButton> */}
      </Stack>
    </PHModal>
  );
};

export default DoctorScheduleModal;
