import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/ui/navbar"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexus",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-tr from-white to-gray-300">

          <Navbar/>

          {children}

        </main>
      </body>
    </html>
  );
}