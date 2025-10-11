import WelcomeUser from "@components/index/WelcomeUser";
import TabTodoList from "@components/index/TabTodoList";

export default async function Index() {
  return (
    <>
      <WelcomeUser />
      <TabTodoList />
    </>
  );
}
