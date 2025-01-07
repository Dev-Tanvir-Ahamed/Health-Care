import { TMeta } from "../common";

export type TDoctor = {
  id: string;
  role: string;
  email: string;
  name: string;
  profilePhoto: string | null;
  contactNumber: string;
  address: string;
  registrationNumber: string;
  experience: number;
  gender: "MALE" | "FEMALE" | "OTHER";
  apointmentFee: number;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  averageRating: number;
  status: "Active" | "Inactive";
  review: any[]; // Adjust type based on the review structure, e.g., `Review[]` if reviews are objects
  doctorSpecialties: any[]; // Adjust type if specialties have a specific structure
};

export type DoctorsResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  meta: TMeta;
  data: TDoctor[];
};
