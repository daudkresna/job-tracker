import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import { Button } from "./ui/button";

const LoginButton = () => {
  return (
    // <form
    //   action={async () => {
    //     "use server";
    //     await signIn("github", { redirectTo: "/" });
    //   }}
    // >
    //   <button type="submit">Sign In with GitHub</button>
    // </form>
    <Link href="/login">
      <Button variant={"default"}>Sign In</Button>
    </Link>
  );
};

const LogoutButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button variant={"default"}>Sign Out</Button>
    </form>
  );
};

const AuthButton = async () => {
  const session = await auth();

  if (!session) {
    return <LoginButton />;
  } else {
    return <LogoutButton />;
  }
};

export default AuthButton;
