import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Form from "@/app/accounts/login/form";


export default async function LoginPage() {
  const session = await getServerSession();
  if(session){
    redirect("/dashboard");
  }
  return (
    <Form />
  );
}