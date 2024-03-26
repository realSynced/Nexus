import Link from "next/link"



export default function Navlinks() {
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

    return(
        <div className="flex flex-col space-y-4">
            {links.map( (link) => (
                <Link key={link.name} href={link.href} className="text-lg">
                    <p>{link.name}</p>
                </Link>
            ))}
        </div>
    )
}