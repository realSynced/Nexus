import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "@/app/ui/navbar";
import Form from "@/app/accounts/login/form";
import changeState from "@/app/ui/navbar"


export default async function LoginPage() {
  const session = await getServerSession();
  if(session){
    
    redirect("/dashboard");
    // return (<Navbar state={session} />)
  }
  return (<>
    {/* <Navbar/> */}
    <Form />
  </>);
}