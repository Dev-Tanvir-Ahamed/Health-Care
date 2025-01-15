"use client";
import InputForm from "@/components/Form/InputForm";
import PHForm from "@/components/Form/PHForm";
import { authKey } from "@/constants/authKey";
import { useResetPasswordMutation } from "@/redux/api/authApi";
import { deleteCookies } from "@/services/actions/deleteCookies";
import { zodResolver } from "@hookform/resolvers/zod";
import KeyIcon from "@mui/icons-material/Key";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
const validationSchema = z.object({
  newPassword: z.string().min(6, "Must be at least 6 characters long"),
});
const ResetPassword = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const token = searchParams.get("token");
  console.log(id, token);
  useEffect(() => {
    if (!token) {
      return;
    }
    localStorage.setItem(authKey, token);
  }, [token]);
  const [resetPassword] = useResetPasswordMutation();
  const onSubmit = async (values: FieldValues) => {
    const updatedValues = {
      id: id,
      newPassword: values.newPassword,
    };

    try {
      const res = await resetPassword(updatedValues);

      if ("data" in res && res.data.status === 200) {
        toast.success("Password Reset Successful");
        localStorage.removeItem(authKey);
        deleteCookies([authKey, "refreshToken"]);
        router.push("/login");
      } else {
        throw new Error("Something Went Wrong, Try Again");
      }
    } catch (error: any) {
      console.log(error);
      toast.success("Something Went Wrong, Try Again");
    }
  };
  return (
    <Box
      sx={{
        px: 4,
        py: 2,
        maxWidth: 600,
        width: "100%",
        boxShadow: 1,
        borderRadius: 1,
        mx: "auto",
        mt: { xs: 2, md: 10 },
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
        <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
          Reset password
        </Typography>
      </Stack>
      <PHForm
        onSubmit={onSubmit}
        defaultValues={{ newPassword: "" }}
        resolver={zodResolver(validationSchema)}
      >
        <Grid>
          <Grid item xs={12} sm={12} md={6}>
            <InputForm
              name="newPassword"
              type="password"
              label="New Password"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
        </Grid>

        <Button type="submit" sx={{ width: "100%", my: 2 }}>
          Reset Password
        </Button>
      </PHForm>
    </Box>
  );
};

export default ResetPassword;
