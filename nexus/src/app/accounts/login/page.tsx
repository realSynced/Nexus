'use client'
import Navbar from "@/app/components/Navbar"
import LoginForm from "./login-form";
import Link from "next/link";
import { oxanium } from "@/app/fonts"
import { useState, useEffect } from "react";

export default function LoginPage() {
  const handleLogin = () => {
    alert("Hello");
  };


  return (
    <main className="min-h-screen overflow-y-hidden">
        <Navbar/>
        <LoginForm/>
    </main>
  );
}
