/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import InputForm from "@/components/Form/InputForm";
import PHFileUpload from "@/components/Form/PHFileUpload";
import PHForm from "@/components/Form/PHForm";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { useCreateSpecialistsMutation } from "@/redux/api/specialistsApi";
import { modifyData } from "@/utils/modifyData";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialistsModal = ({ open, setOpen }: TProps) => {
  const [createSpecialitis] = useCreateSpecialistsMutation();
  const handleSubmit = async (values: FieldValues) => {
    const data = modifyData(values);
    console.log(values);

    try {
      const res = await createSpecialitis(data).unwrap();
      console.log(res);
      if (res?.data?.id) {
        toast.success("Specialists Created Successfully");
        setOpen(false);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <PHModal open={open} setOpen={setOpen} title="Create a A New Speacialists">
      <PHForm onSubmit={handleSubmit} defaultValues={{ title: "" }}>
        <Grid container spacing={2}>
          <Grid size={{ md: 6 }}>
            <InputForm fullWidth={false} name="title" label="Title" />
          </Grid>
          <Grid size={{ md: 6 }}>
            <PHFileUpload name="file" label="Upload File" />
          </Grid>
          <Button sx={{ mt: 1 }} type="submit">
            Create
          </Button>
        </Grid>
      </PHForm>
    </PHModal>
  );
};

export default SpecialistsModal;
