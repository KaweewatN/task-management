import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";

import SessionProvider from "@components/SessionProvider";
import {getServerSession} from "next-auth";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Task Management",
  description: "To do list for personal task management",
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
