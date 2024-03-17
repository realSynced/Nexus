import ProfilePic from "@/app/profile/ui/profile-pic";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="min-h-screen h-lvh ">
      <div className="grid grid-rows-3 grid-cols-3 px-4 pt-4">
        
        <div className="flex text-3xl col-span-3 px-8 lg:px-8 mr-auto overflow-y-hidden">
          <div className="flex flex-col">
            <ProfilePic/>
            <div className="flex px-12">
                <div className="w-1/2 ">
                  <h1>About Me!</h1>
                    <p className="text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, iste ex nobis accusamus blanditiis minima.</p>
                </div>

                <div className="w-1/2">
                  <h1>Interests</h1>
                  <p className="text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit..</p>
                </div>
            </div>

          </div>
        
        </div>
      
      </div>
    </div>
  );
}
