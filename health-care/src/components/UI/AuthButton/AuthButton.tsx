import { logoutUser } from "@/services/actions/logoutUser";
import { getUserInfo } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const router = useRouter();
  const userData = getUserInfo() as any;

  const handleLogOut = () => {
    logoutUser(router);
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
