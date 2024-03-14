"use client";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { oxanium } from "@/app/fonts";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";
// import { ifTrue } from '@/app/api/auth/[...nextauth]/options';
// import { providers, getSession, csrfToken } from "next-auth";

// export default function LoginPage





export default function SignUpPage() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validate user info
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: true,
    });

    console.log(res)
  };
  
  const [wrongCreds, setWrongCreds] = useState("");

  


  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
          <h1 className="text-2xl font-bold mb-4">Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                value={userInfo.email}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, email: target.value })
                }
                type="email"
                placeholder="john@example.com"
              ></input>

              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                value={userInfo.password}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, password: target.value })
                }
                type="password"
                placeholder="Password"
              >
              </input>
              <Link href="/accounts/signup" className="text-blue-500 hover:underline">
                Register</Link>
              <input
                type="submit"
                value="Login"
                className="mt-4 justify-center w-full bg-slate-500 transition-colors duration-150 ease-in-out hover:bg-slate-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}