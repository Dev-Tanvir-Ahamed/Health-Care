import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";
import { SxProps } from "@mui/material/styles";

type TProps = {
  name: string;
  label?: string;
  sx?: SxProps;
  varient?: string;
  onFileUpload?: (file: File) => void; // Callback for file upload
};

export default function PHFileUploader({
  name,
  label,
  sx,
  onFileUpload,
  varient,
}: TProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileUpload(file); // Trigger file upload callback
    }
  };
  return (
    <Button
      component="label"
      variant="text"
      startIcon={<CloudUploadIcon />}
      sx={{ ...sx }}
    >
      {label || "Upload Image"}
      <Input
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </Button>
  );
}
