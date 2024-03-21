'use client'
import { useState, useEffect } from "react";
import ProfilePic from "@/app/profile/ui/profile-pic";
import Link from "next/link";

export default function Profile() {

  const [username, setUsername] = useState("Loading");
  
  useEffect(() => {
    fetch("https://nexusapibackend.netlify.app/.netlify/functions/api/userdata").then(
      response => response.json()
    ).then(
      data => {
        console.log(data);
        setUsername(data.user[0].username);
        // setUrl(data.url);
      }
    ).catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      // Handle error appropriately (e.g., show a message to the user)
    });
  }, []);


  return (
    <div className="min-h-screen h-lvh ">
      <div className="grid grid-rows-3 grid-cols-3 px-4 pt-4">
        <div>
          <div className="text-4xl bg-neutral-content p-4 rounded-lg">
            <h1>@ {username} profile</h1>
          </div>

        </div>
      
      </div>
    </div>
  );
}
