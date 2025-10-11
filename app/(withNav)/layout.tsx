import Nav from "@components/nav/Nav";
import ScrollToTopButton from "@components/ui/ScrollToTopBtn";
import {authenticateUser} from "app/api/auth/[...nextauth]/auth";
import {redirect} from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await authenticateUser().catch(() => {
    redirect("/login");
  });

  return (
    <>
      <Nav className="w-full" />
      <main className="flex w-full flex-col items-center overflow-hidden pt-5">{children}</main>
      <ScrollToTopButton />
    </>
  );
}
