import { ArrowRight, ChartLine, ContactRound, MailOpen } from 'lucide-react'
import React from 'react'

const Grow = () => {
    return (
        <div className='w-[90%] lg:w-[80%] mx-auto flex flex-col gap-16'>
            <div className='flex flex-col lg:flex-row justify-center items-center w-full gap-5 '>
                <div className='flex flex-col w-full gap-2'>
                    <span className='text-[#800000] text-lg font-semibold'>What We Do</span>
                    <h2 className='text-3xl  font-bold w-full lg:w-[70%]'>Grow Your Business With Prospera</h2>
                </div>
                <div className='w-full'><p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorem molestiae eius expedita quae consequatur voluptates explicabo blanditiis vitae tenetur repellendus, vel, laudantium quas officiis velit reprehenderit est sint officia.</p></div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3  gap-5 '>
                <div className='border py-8 px-5 shadow-lg h-80 bg-gray-100 rounded-xl'>
                    <div className='h-full w-full flex flex-col justify-between gap-5'>
                        <div className='w-full'>
                            <span className="bg-[#800000] p-4 rounded-xl inline-flex justify-center items-center">
                                <ChartLine className='text-white' />
                            </span>
                        </div>
                        <h2 className='text-xl font-bold text-[#800000]'>Search Engine Optimization</h2>
                        <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos facere modi voluptatem esse perferendis sapiente ex, est temporibus id explicabo? Rem labore saepe veritatis quis veniam est culpa quas?</p>
                        <button className='flex justify-start items-center text-sm font-semibold gap-2 text-center'>Explore More
                            <ArrowRight className='size-4' />
                        </button>
                    </div>
                </div>

                <div className='border py-8 px-5 shadow-lg h-80 bg-gray-100 rounded-xl'>
                    <div className='h-full w-full flex flex-col justify-between gap-5'>
                        <div className='w-full'>
                            <span className="bg-[#800000] p-4 rounded-xl inline-flex justify-center items-center">
                                <MailOpen className='text-white' />
                            </span>
                        </div>
                        <h2 className='text-xl font-bold text-[#800000]'>Email Marketing</h2>
                        <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos facere modi voluptatem esse perferendis sapiente ex, est temporibus id explicabo? Rem labore saepe veritatis quis veniam est culpa quas?</p>
                        <button className='flex justify-start items-center text-sm font-semibold gap-2 text-center'>Explore More
                            <ArrowRight className='size-4' />
                        </button>
                    </div>
                </div>

                <div className='border py-8 px-5 shadow-lg h-80 bg-gray-100 rounded-xl'>
                    <div className='h-full w-full flex flex-col justify-between gap-5'>
                        <div className='w-full'>
                            <span className="bg-[#800000] p-4 rounded-xl inline-flex justify-center items-center">
                                <ContactRound className='text-white' />
                            </span>
                        </div>
                        <h2 className='text-xl font-bold text-[#800000]'>Social Media Marketing</h2>
                        <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos facere modi voluptatem esse perferendis sapiente ex, est temporibus id explicabo? Rem labore saepe veritatis quis veniam est culpa quas?</p>
                        <button className='flex justify-start items-center text-sm font-semibold gap-2 text-center'>Explore More
                            <ArrowRight className='size-4' />
                        </button>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Grow