import { Button, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Specialists = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialists } = await res.json();
  // console.log(specialists);

  return (
    <Container>
      <div className="my-10 py-10">
        <h1 className="text-4xl font-bold">
          Explore Treatment Across Specialists
        </h1>
        <p className=" text-gray-500 mt-3">
          Find experience doctors across all specialists
        </p>
        <div className="flex justify-center gap-5 items-center mt-10">
          {specialists.map((specialist) => (
            <div
              key={specialist.id}
              className=" size-40 content-center justify-items-center bg-neutral-100 border border-neutral-100 rounded-lg"
            >
              <div>
                <Image
                  src={specialist.icon}
                  alt="speciaslist"
                  width={50}
                  height={50}
                />
              </div>
              <div className="font-bold mt-3">{specialist.title}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-7">
          <Link href="/viewmore">
            <Button variant="outlined">View All</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Specialists;
