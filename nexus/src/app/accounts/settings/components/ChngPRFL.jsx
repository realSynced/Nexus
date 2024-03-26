'use client'

import { useState } from 'react'
import axios from 'axios';

export default function ProfileSettings(){
    const [prflPic, setPrflPic] = useState('')

    function handlePrflPic(e){
        console.log(e.target.file)
        setPrflPic(e.target.files[0])
    }

    function handleClick() {
        const formData = new FormData()
        formData.append('prflPic', prflPic)
        axios.post('url', formData).then((res) =>{
            console.log(res)
        })
    }
    return (
        <>
        <div>
            <div className='flex flex-row'>
                <input type="file" name="file" onChange={handlePrflPic}></input>
            </div>
            <div className='flex flex-row pt-2'>
                <button onClick={handleClick} className='text-lg p-2 bg-neutral-50 border-2 border-neutral-300 rounded-lg transition-all duration-150 hover:bg-neutral-100 hover:scale-105'>Set Profile Picture</button>
            </div>
        </div>
        </>
    )
}