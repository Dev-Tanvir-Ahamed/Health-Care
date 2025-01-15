"use client";
import AuthButton from "@/components/UI/AuthButton/AuthButton";
import { getUserInfo } from "@/services/auth.services";
import { Container } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  const { userId } = getUserInfo();
  return (
    <Container>
      <div className="flex py-5 items-center justify-between">
        <Link href="/home">
          <p className=" font-bold text-4xl">
            P
            <span className=" text-primary" color="primary.main">
              H
            </span>{" "}
            Health Care
          </p>
        </Link>
        <div className=" space-x-10">
          <Link href="/consultation">Consultation</Link>
          <Link href="/consultation">Heath Plans</Link>
          <Link href="/consultation">Medicine</Link>
          <Link href="/consultation">Diogonostics</Link>
          <Link href="/consultation">NGOS</Link>
          {userId && <Link href="/dashboard">Dashbaord</Link>}
        </div>
        <AuthButton />
      </div>
    </Container>
  );
};

export default Navbar;
