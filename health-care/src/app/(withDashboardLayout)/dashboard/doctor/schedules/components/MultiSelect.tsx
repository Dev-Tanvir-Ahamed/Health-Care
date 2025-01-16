import { TScheduleProps } from "@/types";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Theme, useTheme } from "@mui/material/styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function MultiSelect({
  schedules,
  scheduleIDs,
  setScheduleIDs,
}: any) {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<typeof scheduleIDs>) => {
    const {
      target: { value },
    } = event;
    setScheduleIDs(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const getTimeIn12HourFormat = (dateTimeString: string): string => {
    const date: Date = new Date(dateTimeString);
    const hours: number = date.getHours();
    const minutes: number = date.getMinutes();
    const ampm: string = hours >= 12 ? "PM" : "AM";
    const formattedHours: number = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes: string =
      minutes < 10 ? "0" + minutes : minutes.toString();
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={scheduleIDs}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value: any) => {
                const selectedSchedule = schedules.find(
                  (schedule: any) => schedule.id === value
                );
                if (!selectedSchedule) {
                  return null;
                }
                const formetTimeStamp = `${getTimeIn12HourFormat(
                  selectedSchedule.startDate
                )} - ${getTimeIn12HourFormat(selectedSchedule.endDate)}`;
                return <Chip key={value} label={formetTimeStamp} />;
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {schedules?.map((schedule: TScheduleProps) => (
            <MenuItem
              key={schedule.id}
              value={schedule.id}
              style={getStyles(schedule.id, scheduleIDs, theme)}
            >
              {`${getTimeIn12HourFormat(
                schedule.startDate
              )} - ${getTimeIn12HourFormat(schedule.endDate)}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
