"use server";
import { authKey } from "@/constants/authKey";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const setTokenAccess = async (
  token: string,
  option?: { redirect?: string }
) => {
  const cookieStore = await cookies();
  cookieStore.set(authKey, token); // Set the cookie

  if (option && option.redirect) {
    redirect(option.redirect); // Redirect if the option is provided
  }
};
