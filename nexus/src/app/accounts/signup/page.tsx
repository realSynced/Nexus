import Form from "@/app/accounts/signup/form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const session = await getServerSession();
  if(session){
    redirect("/");
  }
  return (
    
    <Form />
  );
}