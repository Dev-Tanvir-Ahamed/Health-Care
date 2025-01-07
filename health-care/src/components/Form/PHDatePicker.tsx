import { SxProps } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { Controller, useFormContext } from "react-hook-form";

type TDatePickerProps = {
  name: string;
  size?: "small" | "medium";
  label?: string;
  fullWidth?: boolean;
  required?: boolean;
  sx?: SxProps;
};

export const PHDatePicker = ({
  name,
  size = "small",
  label,
  fullWidth,
  required,
  sx,
}: TDatePickerProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={dayjs(new Date().toISOString())}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              {...field}
              onChange={(date) => onChange(date)}
              label={label}
              value={value || Date.now()}
              timezone="system"
              disablePast
              slotProps={{
                textField: {
                  required,
                  size,
                  sx: { ...sx },
                  variant: "outlined",
                  fullWidth,
                },
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default PHDatePicker;
