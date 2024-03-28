'use client'
import { useState, useEffect } from "react"
import { oxanium } from "@/app/ui/fonts"


export default function DynamicSurvey({title, context}) {

    return(
        <div className="-mt-20 bg-neutral-100 p-4 py-8 rounded-md ">
            <h1 className="text-4xl">{title}</h1>
            <p>{context}</p>
        </div>
    )
}