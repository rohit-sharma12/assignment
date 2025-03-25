import React from 'react'

import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate()
    return (
        <div className='md:w-[250px] h-[30px]'>
            <h1 className='my-5 text-2xl font-bold'>Welcome to PopX</h1>
            <p className='md:top-[590px] left-[20px] w-[230px] h-[30px]'>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Expedita, sequi.</p>
            <div className='flex flex-col gap-2'>
                <button onClick={() => navigate('/create-account')} className='bg-[#6C25FF] text-white rounded-[5px] md:top-[600px] left-[20px] w-[330px] h-[40px]'>Create Account</button>
                <button onClick={() => navigate('/auth')} className='bg-[#6C25FF4B] rounded-[5px] md:top-[600px] left-[20px] w-[330px] h-[40px]'>Already Registered? Login</button>
            </div>
        </div>
    )
}

export default Landing
