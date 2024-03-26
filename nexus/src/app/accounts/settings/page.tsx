import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";



export default async function Settings(){
    const links = [
        {
            name: "Main Settings",
            href:"/accounts/settings", 
        },
        {
            name: "Profile Settings",
            href: "/accounts/settings/profile"
        },
        {
            name: "Account Settings",
            href: "/accounts/settings/account"
        },
        {
            name: "Billing Settings",
            href: "/accounts/settings/billing"
        },
        {
            name: "Notifications",
            href: "/accounts/settings/notifications"
        },
        {
            name: "Course Settings",
            href: "/accounts/settings/course"
        },
        {
            name: "Privacy Settings",
            href: "/accounts/settings/privacy"
        }
    ];

    const session = await getServerSession();
    if(!session){
        redirect("/accounts/login");
    }

    

    const array = ["main settings", "profile settings", "privacy & security" ,"account settings"]
    return(
        <div className={`min-h-screen h-lvh`}>
                <div className='p-12'>
                    <h1 className='font-bold text-3xl'>Settings</h1>
                    {links.map( (link) =>(
                        <ul key={link.name} className='inline-block text-sm text-neutral-600'>
                            {link.name==="Main Settings" &&
                            <li className='font-bold mr-4'>{link.name} &rsaquo;</li> }
                            {link.name !== "Main Settings" &&
                            <li className='mr-4'>{link.name} &rsaquo;</li> }
                        </ul>
                    ))}
                </div>

            
            
        </div>
    )
}