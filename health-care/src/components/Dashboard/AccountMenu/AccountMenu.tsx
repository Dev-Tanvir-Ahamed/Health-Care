import { removeUser } from "@/services/auth.services";
import { Box } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { redirect } from "next/navigation";

import * as React from "react";
interface AccountMenuProps {
  profilePhoto?: string; // Define profilePhoto as an optional string
}
const AccountMenu: React.FC<AccountMenuProps> = ({ profilePhoto }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    removeUser();
    setAnchorEl(null);
    redirect("/");
  };

  return (
    <Box>
      <Box sx={{ borderRadius: "10px", cursor: "pointer" }}>
        <Image
          src={profilePhoto || "/default-profile.png"}
          alt="Profile Photo"
          width={50}
          height={50}
          onClick={handleClick}
        />
      </Box>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default AccountMenu;
