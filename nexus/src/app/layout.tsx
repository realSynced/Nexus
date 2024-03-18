'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/ui/navbar"
import { SessionProvider } from "next-auth/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Nexus",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <main className="min-h-screen bg-gradient-to-tr from-white to-gray-300">

          <SessionProvider>
            <Navbar/>
            {children}
          </SessionProvider>

        </main>
      </body>
    </html>
  );
}