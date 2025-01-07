import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button } from "@mui/material";
import Image from "next/image";

interface Doctor {
  id: string;
  name: string;
  profilePhoto: string;
  qualification: string;
  designation: string;
  address: string;
}

const DoctorCard = ({ data }: { data: Doctor[] }) => {
  return (
    <>
      {data.map((item: Doctor) => {
        return (
          <div key={item.id} className="bg-white h-[450px] w-[350px]">
            <div>
              <Image
                src={item.profilePhoto}
                alt={item.name || "Doctor's profile image"}
                width={350}
                height={200}
                className="object-contain"
              />
            </div>
            <div className="ml-3">
              <p className="text-2xl font-bold mt-3 mb-1">{item.name}</p>
              <div className="flex gap-2 text-small text-gray-500">
                <p>{item.qualification} - </p>
                <p>{item.designation}</p>
              </div>
              <div className="flex py-2 gap-2">
                <LocationOnIcon />
                <p>{item.address}</p>
              </div>
            </div>
            <div className="flex justify-around mt-3">
              <Button className="">Book Now</Button>
              <Button className="" variant="outlined">
                View Profile
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DoctorCard;
