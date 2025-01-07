/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import asssets from "@/assets";
import { getUserInfo } from "@/services/auth.services";
import { UserRole } from "@/types";
import { drawerItems } from "@/utils/drawerItems";
import { Box, Link, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";

// Extend JwtPayload to include the role property

const Sidebar = () => {
  const [userRole, setUserRole] = useState("");
  console.log(userRole);

  useEffect(() => {
    const { role } = getUserInfo() as any;
    const lowerCaseRole = role.toLowerCase();
    setUserRole(lowerCaseRole);
  }, []);

  return (
    <Box>
      {/* Logo and Title */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        pt={2}
        component={Link}
        href="/"
      >
        <Image src={asssets.svgs.logo} width={40} height={40} alt="logo" />
        <Typography variant="h6" component="h1" sx={{ cursor: "pointer" }}>
          PH Health Care
        </Typography>
      </Stack>

      {/* Sidebar Menu */}
      <List>
        {drawerItems?.(userRole as UserRole).map((item, index) => (
          <SidebarItem key={index} index={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
