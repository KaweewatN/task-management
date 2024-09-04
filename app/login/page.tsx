import LogInBox from "@components/login/LoginBox";
import {getServerAuthSession} from "app/api/auth/[...nextauth]/auth";
import {redirect} from "next/navigation";

export default async function LogIn() {
  const session = await getServerAuthSession();
  if (session) {
    redirect("/");
  }
  return (
    <>
      <LogInBox />
    </>
  );
}
