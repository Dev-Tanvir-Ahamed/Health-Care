"use client";
import InputForm from "@/components/Form/InputForm";
import PHForm from "@/components/Form/PHForm";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { logoutUser } from "@/services/actions/logoutUser";
import { zodResolver } from "@hookform/resolvers/zod";
import KeyIcon from "@mui/icons-material/Key";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
const validationSchema = z.object({
  oldPassword: z.string().min(6, "Must be at least 6 characters long"),
  newPassword: z.string().min(6, "Must be at least 6 characters long"),
});

const ChangePassword = () => {
  const router = useRouter();
  const [ChangePassword, { error }] = useChangePasswordMutation();
  console.log(error);

  const onSubmit = async (values: FieldValues) => {
    try {
      const res = await ChangePassword(values);
      if (res?.data?.status === 200) {
        logoutUser(router);
        toast.success("Password Changed Succesfully");
      } else {
        toast.error("Password is Incoreect");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Box
        sx={{
          px: 4,
          py: 2,
          maxWidth: 600,
          width: "100%",
          boxShadow: 1,
          borderRadius: 1,
          mx: "auto",
          mt: {
            xs: 2,
            md: 5,
          },
        }}
      >
        <Stack alignItems="center" justifyContent="center">
          <Box
            sx={{
              "& svg": {
                width: 100,
                height: 100,
              },
            }}
          >
            <KeyIcon sx={{ color: "primary.main" }} />
          </Box>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 2, mt: -1.5 }}>
            Change password
          </Typography>
        </Stack>
        <PHForm
          onSubmit={onSubmit}
          defaultValues={{ oldPassword: "", newPassword: "" }}
          resolver={zodResolver(validationSchema)}
        >
          <Grid>
            <Grid item xs={12} sm={12} md={6}>
              <InputForm
                name="oldPassword"
                type="password"
                label="Old Password"
                fullWidth
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <InputForm
                name="newPassword"
                type="password"
                label="New Password"
                fullWidth
                sx={{ mb: 2 }}
              />
            </Grid>
          </Grid>

          <Button type="submit" sx={{ width: "100%", my: 2 }}>
            change Password
          </Button>
        </PHForm>
      </Box>
    </div>
  );
};

export default ChangePassword;
