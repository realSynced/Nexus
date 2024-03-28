import Card from "@/app/learn/ui/components/CourseCard"

export default function Sect1Grid() {
    return(
        <div className="grid grid-cols-4 gap-4 border-2 border-x-0 border-b-0 border-t-neutral-100 pt-4 overflow-y-auto">
            <Card name="HTML" enrolled="200" link="" />
            <Card name="CSS" enrolled="200" link="" />
            <Card name="JavaScript" enrolled="200" link="" />
            <Card name="HTML" enrolled="200" link="" />
            <Card name="HTML" enrolled="200" link="" />
            <Card name="HTML" enrolled="200" link="" />
            <Card name="HTML" enrolled="200" link="" />
            <Card name="HTML" enrolled="200" link="" />
            <Card name="HTML" enrolled="200" link="" />
            <Card name="HTML" enrolled="200" link="" />
        </div>
    )
}