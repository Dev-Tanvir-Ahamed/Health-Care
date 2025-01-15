import { USER_ROLE } from "@/constants/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

export type UserRole = keyof typeof USER_ROLE;

export interface IDrawerItem {
  title: string;
  path: string;
  parrentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string;
  };
  child?: IDrawerItem[];
}

export type ResponseSuccessType = {
  data: any;
  meta?: TMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenaraticErrorMeassage[];
};

export type IGenaraticErrorMeassage = {
  path: string | number;
  meassage: string;
};

export type TUserData = {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
  profilePhoto: string;
  role: UserRole; // Enum-like roles, you can add more as needed
  status: "ACTIVE" | "INACTIVE"; // Enum-like statuses
  isDeleted: boolean;
  needPasswordChange: boolean;
  createdAt: string; // ISO 8601 date-time string
  updatedAt: string; // ISO 8601 date-time string
};
