import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
type TInputProps = {
  label?: string;
  type?: string;
  size?: "small" | "medium";
  name: string;
  fullWidth?: boolean;
  sx?: SxProps;
  required?: boolean;
};
const InputForm = ({
  name,
  label,
  type = "text",
  size = "small",
  sx,
  required,
  fullWidth,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          sx={{ ...sx }}
          label={label}
          variant="outlined"
          fullWidth={fullWidth}
          type={type}
          size={size}
          required={required}
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default InputForm;
