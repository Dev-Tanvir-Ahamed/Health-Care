"use client";
import assets from "@/assets";
import InputForm from "@/components/Form/InputForm";
import PHForm from "@/components/Form/PHForm";
import { loginSchema } from "@/schema/loginSchema";
import { loginPatient } from "@/services/actions/loginPatient";
import { storeUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const Page = () => {
  const router = useRouter();
  const handleLogin = async (data: FieldValues) => {
    console.log(data);

    try {
      const res = await loginPatient(data);
      console.log(res);
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/");
      } else {
        toast.error(res?.message);
        // setError(res?.message);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <Container sx={{ mt: 10 }}>
      <Box
        sx={{
          width: "600px",
          boxShadow: 1,
          height: "450px",
          mx: "auto",
          padding: "40px",
        }}
      >
        {/* heading */}
        <Stack alignItems="center" pb={3}>
          <Image src={assets.svgs.logo} alt="logo" width={50} height={50} />
          <Typography variant="h5" component="h1" fontWeight={700} my={1}>
            Login Patient HealthCare
          </Typography>
        </Stack>
        {/* form */}
        <PHForm
          onSubmit={handleLogin}
          resolver={zodResolver(loginSchema)}
          defaultValues={{
            email: "",
            password: "",
          }}
        >
          <Stack direction="row" spacing={2}>
            <InputForm name="email" label="Email" fullWidth type="email" />
            <InputForm
              name="password"
              label="Password"
              fullWidth
              type="password"
            />
          </Stack>
          <Box sx={{ textAlign: "right", mt: 2, mb: 4 }}>
            <Link href="" underline="none" variant="body2">
              Forget Password
            </Link>
          </Box>
          <Button fullWidth type="submit">
            Login
          </Button>
        </PHForm>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          mt={4}
          alignItems="center"
        >
          <Typography variant="body2">Don&apos;t have a account?</Typography>
          <Link underline="none" href="/register">
            Create an account
          </Link>
        </Stack>
      </Box>
    </Container>
  );
};

export default Page;
