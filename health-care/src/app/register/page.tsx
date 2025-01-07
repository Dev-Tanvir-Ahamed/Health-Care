"use client";

import { registerPatient } from "@/services/actions/registerPatient";
import { modifyData } from "@/utils/modifyData";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";

import InputForm from "@/components/Form/InputForm";
import PHForm from "@/components/Form/PHForm";
import { registerSchema } from "@/schema/registerSchema";
import { loginPatient } from "@/services/actions/loginPatient";
import { storeUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import assets from "../../assets/index";
// import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const handleRegister: SubmitHandler<FieldValues> = async (values) => {
    const data = modifyData(values);
    console.log(data);
    try {
      const res = await registerPatient(data);
      if (res?.data?.id) {
        toast.success(res.message);
        const result = await loginPatient({
          password: values.password,
          email: values.patient.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/dashboard");
        }
      } else {
        toast.error(res?.message);
      }
      console.log(res);
    } catch (error: any) {
      console.error(error.message);
    }
  };
  // console.log(data);
  return (
    <Container sx={{ marginTop: "80px" }}>
      <Box
        sx={{
          width: "600px",
          boxShadow: 1,
          height: "550px",
          mx: "auto",
          padding: "40px",
        }}
      >
        {/* heading */}
        <Stack alignItems="center" pb={3}>
          <Image src={assets.svgs.logo} alt="logo" width={50} height={50} />
          <Typography variant="h5" component="h1" fontWeight={700} my={1}>
            Patient Register
          </Typography>
        </Stack>
        {/* form */}
        <PHForm
          onSubmit={handleRegister}
          resolver={zodResolver(registerSchema)}
          defaultValues={{
            patient: {
              name: "",
              email: "",
              contactNumber: "",
              address: "",
            },
            password: "",
          }}
        >
          <Stack spacing={3}>
            <Box>
              <InputForm name="patient.name" label="Name" fullWidth />
            </Box>
            <Stack direction="row" spacing={2}>
              <InputForm
                name="patient.email"
                label="Email"
                fullWidth
                type="email"
              />
              <InputForm
                name="password"
                label="Password"
                fullWidth
                type="password"
              />
            </Stack>
            <Stack direction="row" spacing={2}>
              <InputForm
                name="patient.contactNumber"
                label="Contact Number"
                type="number"
                fullWidth
              />
              <InputForm name="patient.address" label="Address" fullWidth />
            </Stack>
            <Box pt={2}>
              <Button type="submit" fullWidth>
                Register
              </Button>
            </Box>
          </Stack>
        </PHForm>
        <Box
          sx={{ display: "flex", marginTop: "30px", justifyContent: "center" }}
        >
          <Typography>Do you have already an account?</Typography>
          <Link href="/login" underline="none">
            Login
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
