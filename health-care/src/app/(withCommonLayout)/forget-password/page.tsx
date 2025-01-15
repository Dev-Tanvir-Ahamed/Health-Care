"use client";
import InputForm from "@/components/Form/InputForm";
import PHForm from "@/components/Form/PHForm";
import { useForgotPasswordMutation } from "@/redux/api/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import CheckIcon from "@mui/icons-material/Check";
import KeyIcon from "@mui/icons-material/Key";
import { Alert, Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
});
const ForgetPassword = () => {
  const [forgetPassword, { isSuccess }] = useForgotPasswordMutation();
  const onSubmit = async (values: FieldValues) => {
    try {
      const res = await forgetPassword(values);
      console.log(res);
      if (res?.data?.status === 200) {
        toast.success("Check Your Email For Reset Link ");
      } else {
        toast.error("Something went wrong. Try again!!!");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(values);
  };
  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        height: { sm: "100vh" },
      }}
    >
      <Box
        sx={{
          px: 4,
          py: 2,
          maxWidth: 600,
          width: "100%",
          boxShadow: 1,
          borderRadius: 1,
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
            Forgot password
          </Typography>
        </Stack>

        {isSuccess && (
          <Box mb={3}>
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              An Email with reset password link was sent to your email
            </Alert>
          </Box>
        )}

        <PHForm
          onSubmit={onSubmit}
          defaultValues={{ email: "" }}
          resolver={zodResolver(validationSchema)}
        >
          <Grid>
            <Grid item xs={12} sm={12} md={6}>
              <InputForm
                name="email"
                type="email"
                label="Your email"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>
          </Grid>

          <Button type="submit" sx={{ width: "100%", my: 2 }}>
            forgot Password
          </Button>
        </PHForm>
      </Box>
    </Stack>
  );
};

export default ForgetPassword;
