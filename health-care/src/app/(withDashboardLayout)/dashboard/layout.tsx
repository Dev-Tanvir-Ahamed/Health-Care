import ResponsiveDrawer from "@/components/Dashboard/DashboardDrawer/DashbaordDrawer";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ResponsiveDrawer>{children}</ResponsiveDrawer>
    </div>
  );
};

export default DashboardLayout;
