import { MoveDown } from 'lucide-react'
import React from 'react'

const Landing = () => {
    return (
        <div className='w-full h-[90vh] flex justify-center items-center '>
            <div className='w-[80%] mx-auto flex justify-center items-center h-full'>
                <div className='flex flex-col gap-10 justify-center items-center'>
                    <h1 className='text-8xl text-[#800000] font-bold'>Growth Made Easy</h1>
                    <p className='w-[70%] mx-auto text-center text-lg font-medium '>At Prospera Hospitality, we create simple, tailored strategies that address your hotel’s unique needs. Our data-driven insights empower you to optimize pricing and maximize occupancy for sustainable revenue growth.</p>
                </div>
                <div className="flex flex-col h-full justify-end">
                    <div className='flex flex-col items-center justify-end gap-4 animate-bounce'>
                        <span className="transform rotate-90  rounded">
                            Scroll
                        </span>
                        <span className="">
                            <MoveDown />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing