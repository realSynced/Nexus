// https://nexusapibackend.netlify.app/.netlify/functions/api/userdata

export default function Dashboard() {
  
  

  return (
    <div className="rounded-lg space-y-6 p-10 pb-16 md:block md:h-svh bg-gradient-to-tr from-white to-gray-200">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome!
        </p>
      </div>

      <div className="shrink-0 bg-border h-[1px] w-full"></div>
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        {/* Navigation links */}
      </div>
    </div>
  );
}
