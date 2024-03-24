import Link from "next/link";

export default function Footer() {
    return(
        <section className="flex flex-row space-x-24 mt-12 p-12 px-24 border-2 border-neutral-100">

            <div className="text-xl font-bold">
                Nexus
            </div>

            <div className="flex flex-col text-sm font-semibold mt-1">
                
                <div>
                    <h1>Resources</h1>
                </div>
                <div className="font-normal text-neutral-500">
                    <div>
                        <ul>
                            <li><Link href="">Our platform</Link></li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="flex flex-col text-sm font-semibold mt-1">
                
                <div>
                    <h1>About Us</h1>
                </div>
                <div className="font-normal text-neutral-500">
                    <div>
                        <ul>
                            <li><Link href="">Our Mission</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
            
            <div className="flex flex-col text-sm font-semibold mt-1">
                
                <div>
                    <h1>Legal</h1>
                </div>
                <div className="font-normal text-neutral-500">
                    <div>
                        <ul>
                            <li><Link href="">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

            </div>

        </section>
    )
}