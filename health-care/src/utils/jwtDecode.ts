import { jwtDecode } from "jwt-decode";

export const tokenDecoded = (token: string) => {
  return jwtDecode(token);
};
