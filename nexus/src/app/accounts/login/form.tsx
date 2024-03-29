'use client'

import { FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react"

import { handleSave } from "@/global/functionality/storing";



export default function Form(){
    const router = useRouter()
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await signIn('credentials', {
          email: formData.get('email'),
          password: formData.get('password'),
          redirect: false,
        });
        
        
        // console.log({ response })
        // console.log("testt")

        if(!response?.error){
            router.push("/profile");
            router.refresh();
        }else{
            alert(response.error)
        }
    }


    return(

        <>
            <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
                <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
                        <h1 className="text-2xl font-bold mb-4">Login</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Email
                                </label>
                                <input name="email" type="email" placeholder="john@example.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Password
                                </label>
                                <input name="password" placeholder="password123" type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                <a href="/accounts/signup" className="text-blue-500 hover:underline">Not a member?</a>
                                <button type="submit" className="mt-4 justify-center w-full bg-slate-500 transition-colors duration-150 ease-in-out hover:bg-slate-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer">Login</button>
                            </div>
                        </form>
                    </div>
            </div>
        </>

    );
}