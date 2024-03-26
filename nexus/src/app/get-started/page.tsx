import { oxanium } from "@/app/ui/fonts"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function GetStarted() {
    const session = await getServerSession();
    if(!session){
        redirect("/accounts/signup");
    } else {
        return;
    }

    return(
        <div className={`${oxanium.className} flex flex-row justify-center items-center drop-shadow-lg`}>

            <div className="bg-neutral-300 text-2xl p-4 rounded-md ">

                <h1>Hello, welcome!</h1>


            </div>

        </div>
    )
}