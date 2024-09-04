import Nav from "@components/nav/Nav";
import ScrollToTopButton from "@components/ui/ScrollToTopBtn";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav className="w-full" />
      <main className="flex w-full flex-col items-center overflow-hidden pt-5">{children}</main>
      <ScrollToTopButton />
    </>
  );
}
