import ChngPRFL from "@/app/accounts/settings/components/ChngPRFL"
import ImageUploader from "@/app/accounts/settings/components/ImageUploader"

export default function ProfileSettings() {


    return (
        <div className="min-h-screen h-lvh pl-12">
            <div className='p-12'>
                    <h1 className='font-bold text-3xl'>Settings</h1>
                    {/* <ChngPRFL/> */}
                    <ImageUploader/>
            </div>
            
        </div>
    )
}