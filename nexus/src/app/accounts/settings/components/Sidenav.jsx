import Navlinks from "./navlinks"
export default function Sidenav() {
    return (
        <div className="static ml-24 mt-24 pr-4 absolute  ">
            <div className="p-12 bg-neutral-100 text-black">
                <Navlinks/>
            </div>
        </div>
    )
}