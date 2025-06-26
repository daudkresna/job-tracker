import { auth, signIn, signOut } from "@/auth";

const LoginButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/" });
      }}
    >
      <button type="submit">Sign In with GitHub</button>
    </form>
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
      <button type="submit">Sign Out</button>
    </form>
  );
};

const AuthButton = async () => {
  const session = await auth();
  console.log("Session:", session);

  if (!session) {
    return <LoginButton />;
  } else {
    return <LogoutButton />;
  }
};

export default AuthButton;
