import { IDrawerItem } from "@/types";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

type IProps = {
  item: IDrawerItem;
  index: number;
};

const SidebarItem = ({ item, index }: IProps) => {
  const linkPath = `/dashboard/${item.path}`;
  const pathName = usePathname();
  return (
    <Link href={linkPath}>
      <ListItem
        key={index}
        disablePadding
        sx={{
          ...(linkPath === pathName
            ? {
                borderRight: "3px solid #1586FD",
                "& svg": {
                  color: "#1586fd",
                },
              }
            : {}),
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;
