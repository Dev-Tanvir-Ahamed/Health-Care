import { jwtDecode } from "jwt-decode";

export const tokenDecoded = (token: string | null) => {
  try {
    if (!token) throw new Error("Token is null or undefined");
    return jwtDecode(token);
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
