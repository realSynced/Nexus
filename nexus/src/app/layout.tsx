import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DNavbar from "@/app/ui/navbar/daisy-navbar"
import Footer from "@/app/ui/components/Footer"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexus",
  description: "A home for developers, market for recruiters. Whether you're a beginner, or senior level developer, you can find your place here at Nexus.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <main className="min-h-screen">

          {/* <SessionProvider> */}
            <DNavbar/>
            {children}
            
          {/* </SessionProvider> */}

        </main>
      </body>
    </html>
  );
}