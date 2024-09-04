import WelcomeUser from "@components/index/WelcomeUser";
import TabTodoList from "@components/index/TabTodoList";
import {authenticateUser} from "app/api/auth/[...nextauth]/auth";
import {redirect} from "next/navigation";

export default async function Index() {
  await authenticateUser().catch(() => {
    redirect("/login");
  });

  return (
    <>
      <WelcomeUser />
      <TabTodoList />
    </>
  );
}
