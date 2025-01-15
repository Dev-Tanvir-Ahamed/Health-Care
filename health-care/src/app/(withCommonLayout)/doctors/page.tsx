import ScrollSpecialities from "@/components/UI/Doctor/ScrollSpecialities";
import ViewAllDoctorCard from "@/components/UI/Doctor/ViewAllDoctorCard";
import { TDoctor } from "@/types";
import { Box } from "@mui/material";

type TSearchProps = {
  searchParams: {
    specialties: string;
  };
};

const Doctors = async ({ searchParams }: TSearchProps) => {
  let res;

  if (searchParams.specialties) {
    res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/doctor?specialties=${searchParams.specialties}`
    );
  } else {
    res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/doctor`);
  }

  const { data } = await res.json();

  return (
    <Box>
      <ScrollSpecialities />
      {data?.map((doctor: TDoctor) => (
        <Box key={doctor.id}>
          <ViewAllDoctorCard doctor={doctor} />
        </Box>
      ))}
    </Box>
  );
};

export default Doctors;
