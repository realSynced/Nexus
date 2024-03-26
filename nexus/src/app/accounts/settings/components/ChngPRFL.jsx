'use client'

import { useState } from 'react'

export default function ProfileSettings(){
    const [prflPic, setPrflPic] = useState('')

    function handlePrflPic(e){
        console.log(e.target.file)
        setPrflPic(e.target.files[0])
    }
    return (
        <div>
            <input type="file" name="file" onChange={handlePrflPic}></input>
            <button className='p-4 text-lg'>Upload</button>
        </div>
    )
}