import { MoveDown } from 'lucide-react'
import React from 'react'
import Link from 'next/link';
import { Button } from '@nextui-org/react';


const Landing = () => {
    return (
        <div className='w-full h-[80vh] md:h-[80vh] py-10 lg:p-0 lg:h-[90vh] flex justify-center items-center'>
            <div className='relative w-[90%] lg:w-[80%] mx-auto flex justify-center items-center h-full'>
                <div className='flex flex-col gap-10 justify-start lg:justify-center items-center'>
                    <div className='w-full flex justify-start lg:justify-center items-center '>
                        <h1 className='text-start lg:text-center text-6xl md:text-8xl lg:text-8xl text-[#800000] font-bold w-[90%] md:w-[70%] lg:w-[90%]'>Growth Made Easy</h1>
                    </div>
                    <div className='flex justify-start lg:justify-center items-center '>
                        <p className='w-full lg:w-[70%] md:w-[80%] text-start lg:text-center text-lg text-gray-500 font-medium'>At Prospera Hospitality, we create simple, tailored strategies that address your hotel’s unique needs. Our data-driven insights empower you to optimize pricing and maximize occupancy for sustainable revenue growth.</p>
                    </div>

                    <Link href="contact-us" className='w-full flex lg:hidden'>
                        <Button radius="full" className="bg-[#800000] text-white font-semibold px-4 ">
                            Let’s Get Started!
                        </Button>
                    </Link>
                </div>

                <div className="absolute bottom-0 right-0 flex-col h-[] justify-end hidden lg:flex">
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