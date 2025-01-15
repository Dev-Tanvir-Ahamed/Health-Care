import { Button, Container } from "@mui/material";
import Link from "next/link";
import DoctorCard from "./DoctorCard";

const TopRatedDoctors = async () => {
  const res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=3");
  const { data: doctorsData } = await res.json();
  // console.log(doctorsData);

  return (
    <div
      className="py-[250px]"
      style={{
        backgroundColor: "rgba(20,20,20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Container>
        <div className="py-10">
          <div className="text-center">
            <p className="text-4xl font-bold">Our Top Rated Doctors</p>
            <p className="w-1/2 mx-auto my-3">
              Access to expert physicians and sergeons, advanced technologies
              and top-quality surgery facilities right here.
            </p>
          </div>
          <div className="flex flex-col xl:flex-row w-full justify-between">
            <DoctorCard data={doctorsData} />
          </div>
        </div>
      </Container>
      <div className="text-center">
        <Link href="/doctors">
          <Button variant="outlined">View All</Button>
        </Link>
      </div>
    </div>
  );
};

export default TopRatedDoctors;
