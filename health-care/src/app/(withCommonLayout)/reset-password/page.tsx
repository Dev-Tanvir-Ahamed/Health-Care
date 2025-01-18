import { Suspense } from "react";
import ResetPassword from "./components/ResetPassword";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPassword />
    </Suspense>
  );
};

export default Page;
