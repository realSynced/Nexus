// import { se } from "@/app/api/auth/[...nextauth]/route";

import { getSession } from "next-auth/react";
import  {getUserInfo} from "@/app/api/auth/[...nextauth]/route";



export default async function Dashboard() {

  // const session = await getSession({req})
    const userInfo = await getUserInfo();
    return (
        <div className=" rounded-lg space-y-6 p-10 pb-16 md:block md:h-svh bg-gradient-to-tr from-white to-gray-200">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
            <p className="text-muted-foreground">
              Welcome {userInfo.username}!
            </p>
          </div>

          {/* Seperator */}

          <div className="shrink-0 bg-border h-[1px] w-full"></div>
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
              <a
                className="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start"
                href="/examples/forms">Profile</a>
                
                <a className="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 bg-muted hover:bg-muted justify-start"
                href="/examples/forms/account">Account</a>
                
                <a className="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start"
                href="/examples/forms/appearance">Appearance</a>
              <a className="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start"
                href="/examples/forms/notifications">Notifications</a>
                <a className="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start"
                href="/examples/forms/display">Display</a>
            </nav>

            <div className="flex-1 lg:max-w-2xl">

              {/* About Page Content */}
              <h2 className="text-lg font-bold tracking-tight">Account</h2>
              <p className="text-sm text-muted-foreground">
                Update your account settings. Set your preferred language and
                timezone.
              </p>
              
            </div>
          </div>
        </div>
    );
}