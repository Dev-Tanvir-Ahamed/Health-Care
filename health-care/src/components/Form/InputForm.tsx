import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
type TInputProps = {
  label?: string;
  type?: string;
  size?: "small" | "medium";
  name: string;
  fullWidth: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
};
const InputForm = ({
  name,
  label,
  type = "text",
  size = "small",
  sx,
  placeholder,
  required,
  fullWidth,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <div>
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
            placeholder={label}
            error={!!error?.message}
            helperText={error?.message}
          />
        )}
      />
    </div>
  );
};

export default InputForm;
