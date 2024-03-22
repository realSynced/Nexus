'use client'
import { useState, useEffect } from "react";
import Socials from "@/app/profile/ui/socials"
// import ProfilePic from "@/app/profile/ui/profile-pic";
import { useSession } from "next-auth/react"


export default function Profile() {
  const { data: session, status } = useSession()
  const [username, setUsername] = useState("Loading");
  
  useEffect(() => {
    fetch("/api/userdata").then(
      response => response.json()
    ).then(
      data => {
        console.log(data);
        setUsername(data.result.rows[0].username);
        // setUrl(data.url);
      }
    ).catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      // Handle error appropriately (e.g., show a message to the user)
    });
  }, []);


  return (
    <div className="min-h-screen h-lvh ">
      <div className="flex flex-rows px-4 pt-4">
        <div className="flex flex-col space-y-5">
          
          
          <div className="flex items-center space-x-2 w-6/7 text-4xl bg-neutral-content p-4 rounded-lg font-bold">
              <div className="w-14 h-14 rounded-full">
                <img  className="w-22 rounded-full" alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            
            <h1>@{username}'s profile</h1>
            {/* <p>Email:</p> */}
          </div>
          
            
          <div className="flex space-x-2 text-2xl">
            
            <div className="bg-neutral-100 p-4 py-2 rounded-lg">
              <h1 className="font-semibold">About</h1>
              <p className="text-xl">Hello! Welcome to my profile.</p>
            </div>
            <div className="bg-neutral-100 p-4 py-2 rounded-lg">
              <h1 className="font-semibold">Interests</h1>
              <p className="text-xl">I am interested in NextJS and React</p>
            </div>
          </div>
          <div className="mr-auto">
              <Socials/>
          </div>  

        </div>
      
      </div>
    </div>
  );
}
