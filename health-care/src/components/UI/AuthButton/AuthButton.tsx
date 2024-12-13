"use client";
import { getUserInfo, removeUser } from "@/services/auth.services";
import { Button } from "@mui/material";

import Link from "next/link";
import { useEffect, useState } from "react";

const AuthButton = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    setUserData(getUserInfo());
  }, []);
  //   const userData = getUserInfo();
  const handleLogOut = () => {
    removeUser(); // Clear the user data (e.g., localStorage)
    setUserData(null); // Update the state to reflect the logout
  };

  return (
    <div>
      {userData?.userId ? (
        <Link href="">
          <Button color="error" onClick={handleLogOut}>
            Logout
          </Button>
        </Link>
      ) : (
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      )}
    </div>
  );
};

export default AuthButton;
