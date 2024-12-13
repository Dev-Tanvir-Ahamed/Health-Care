import assets from "@/assets";
import { Button, Container } from "@mui/material";
import Image from "next/image";
const HeroSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-12 gap-10 h-screen">
        <div className=" col-span-6 bg-gray-100 place-content-center">
          <div
            style={{
              backgroundImage: `url(${assets.svgs.grid.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="space-y-4 ml-5">
              <p className="text-6xl font-bold"> Helthier Hearts </p>
              <p className="text-6xl font-bold">Come From</p>
              <p className="text-6xl font-bold text-primary">Preventive Care</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                consequatur quisquam, iste minima magnam asperiores quia fugit
                possimus, sit laborum, expedita voluptate! Inventore placeat
                illum corporis dicta officiis? Totam, earum!
              </p>

              <div className="space-x-3">
                <Button>Make Appointment</Button>
                <Button variant="outlined">Contact Us</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 relative">
          <Image
            src={assets.svgs.arrow}
            width={80}
            height={80}
            className="absolute top-10 left-1/3"
            alt="arrow"
          />
          <Image
            src={assets.images.doctor1}
            alt="doctor1"
            height={500}
            width={250}
            className=" absolute left-0 top-24"
          />
          <Image
            src={assets.images.doctor2}
            height={600}
            width={300}
            className="absolute right-0 top-5"
            alt="doctor2"
          />
          <Image
            src={assets.images.doctor3}
            height={500}
            width={300}
            className="absolute bottom-16 left-16"
            alt="doctor3"
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
