'use client'
import { useState, useEffect } from "react"
import { oxanium } from "@/app/ui/fonts"


export default function DynamicSurvey() {

    return(
        <div className={`${oxanium.className} flex flex-row justify-center items-center drop-shadow-lg`}>

            <div className="bg-neutral-300 text-2xl p-4 rounded-md ">

                <h1>Hello, welcome!</h1>


            </div>

        </div>
    )
}