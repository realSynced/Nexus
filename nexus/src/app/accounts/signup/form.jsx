'use client'

import { FormEvent } from "react";
import { handleSave } from "@/global/functionality/storing";
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";


export default function Form(){

    const [inputFields, setInputFields] = useState({
        username: "",
        email: "",
        password: "",
      });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    

    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.username.length <= 4) {
            errors.username = "Username is too short";
          }
        if (inputValues.email.length < 15) {
          errors.email = "Email is too short";
        }
        if (inputValues.password.length < 6) {
          errors.password = "Password is too short";
        }
        return errors;
    };
    const handleChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(validateValues(inputFields));
        setSubmitting(true);

        if (Object.keys(errors).length === 0 && submitting) {
            handleSave(email, username);
            handleSubmitData(e);
        }
    }

    const handleSubmitData = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const response = await fetch(`/api/auth/register`, {
            method: "POST",
            body: JSON.stringify({
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password"),
            }),
        });
        
        console.log('Form submitted:', formData);
        console.log({ response })

        const responses = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
          });
          // console.log({ response })
          // console.log("testt")
  
          if(!responses?.error){
              router.push("/profile");
              router.refresh();
          }else{
              alert(responses.error)
          }
    }


    // const finishSubmit = () => {
    //     handleSubmitData()
    // };
     
    //   useEffect(() => {
    //     if (Object.keys(errors).length === 0 && submitting) {
    //       finishSubmit();
    //     }
    // }, [errors]);

    

    return(

        <>
            <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
                <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
                        <h1 className="text-2xl font-bold mb-4">Register</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Username
                                </label>
                                <input 
                                    name="username" 
                                    type="username" 
                                    value={inputFields.username}
                                    onChange={handleChange}
                                    placeholder="RegentNight2907" 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                required/>
                                {errors.username ? (
                                <p className="error text-red-500">
                                    Username should be at least 5 characters long
                                </p>
                                ) : null}
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Email
                                </label>
                                <input 
                                    name="email" 
                                    type="email"
                                    value={inputFields.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com" 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                required/>
                                {errors.email ? (
                                <p className="error text-red-500">
                                    Email should be at least 15 characters long
                                </p>
                                ) : null}
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Password
                                </label>
                                <input 
                                    name="password" 
                                    placeholder="password123" 
                                    type="password"
                                    value={inputFields.password}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                required/>
                                {errors.password ? (
                                <p className="error text-red-500">
                                    Password should be at least 6 characters long
                                </p>
                                ) : null}

                                <a href="/accounts/login" className="text-blue-500 hover:underline">Already a member?</a>
                                <button type="submit" className="mt-4 justify-center w-full bg-slate-500 transition-colors duration-150 ease-in-out hover:bg-slate-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer">Register</button>
                            </div>
                        </form>
                    </div>
            </div>
        </>

    );
}