import ScrollSpecialities from "@/components/UI/Doctor/ScrollSpecialities";
import ViewAllDoctorCard from "@/components/UI/Doctor/ViewAllDoctorCard";
import { TDoctor } from "@/types";
import { Box } from "@mui/material";

// Assuming you have a type for the expected structure of searchParams
interface SearchParams {
  specialties: string;
}

// Update TSearchProps to reflect that searchParams is a Promise
type TSearchProps = {
  searchParams: Promise<SearchParams>; // Change to Promise
};

const Doctors = async ({ searchParams }: TSearchProps) => {
  const params = await searchParams;
  let res;

  if (params.specialties) {
    res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/doctor?specialties=${params.specialties}`
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
