import Card from "@/app/learn/ui/components/CourseCard"
import { inter } from "@/app/ui/fonts"



export default function Section1() {
    return (
        <div className={`h-full grow`}>
            <div className="">
                <div className="flex justify-center my-14">
                    <h1 className="font-bold text-4xl ">Courses</h1>
                </div>
                
                <div className=" text-2xl pb-4">
                    <form action="">
                        <label htmlFor="" className="mr-4">Search:</label>
                        <input type="text" placeholder="web development"
                         className=" px-2 border rounded-lg">

                         </input>
                    </form>
                </div>
                
                <div className="grid grid-cols-4 gap-4 border-2 border-x-0 border-b-0 border-t-neutral-100 pt-4">
                    <Card name="HTML" enrolled="200" link="" />
                    <Card name="CSS" enrolled="200" link="" />
                    <Card name="JavaScript" enrolled="200" link="" />
                    <Card name="HTML" enrolled="200" link="" />
                    <Card name="HTML" enrolled="200" link="" />
                    <Card name="HTML" enrolled="200" link="" />
                    <Card name="HTML" enrolled="200" link="" />
                    <Card name="HTML" enrolled="200" link="" />
                </div>
            </div>
        </div>
    )
}