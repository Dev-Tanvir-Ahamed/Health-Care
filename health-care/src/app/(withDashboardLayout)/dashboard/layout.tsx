"use client";
import ResponsiveDrawer from "@/components/Dashboard/DashboardDrawer/DashbaordDrawer";

import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  // const router = useRouter();
  // if (!isUserLoggedIn()) {
  //   return router.push("/login");
  // }
  return (
    <div>
      <ResponsiveDrawer>{children}</ResponsiveDrawer>
    </div>
  );
};

export default DashboardLayout;
