import { oxanium } from "@/app/ui/fonts"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import DySurv from "./components/DynamicSurvey"


export default async function GetStarted() {
    const session = await getServerSession();
    if(!session){
        redirect("/accounts/signup");
    }

    let dysurvey = [
        {
            intro: `Welcome []!`,
            question: `How are you?`,
            options: [`Good`, `Bad`, `Eh`]
        }
    ]

    return(
        <div className={`h-dvh font-bold flex justify-center items-center bg-red`}>
                <DySurv title={dysurvey[0].intro} context={dysurvey[0].question}/>
        </div>
    )
}