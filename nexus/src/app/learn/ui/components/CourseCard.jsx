export default function Card({name, enrolled, link, image}) {

    return(
        <div className="flex flex-col h-48 rounded-lg bg-neutral-100 p-4">
            <div>
                <h1>{name}</h1>
            </div>
            <div></div>
            <div>
                <p>{enrolled} taking course.</p>
            </div>
        </div>
    )
}