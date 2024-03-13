'use client'
import { oxanium } from "@/app/fonts"
import Navbar from "@/app/components/Navbar"
import SignUpForm from "./signup-form";




export default function SignUpPage() {
  
  const handleSignup = () => {
    alert("Hello");
  };

  return (
    <main className="min-h-screen overflow-y-hidden">
        <Navbar/>
        <SignUpForm/>
    </main>
  );
}
