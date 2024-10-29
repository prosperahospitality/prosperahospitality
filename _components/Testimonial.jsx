import IMAGES from '@/public'
import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
    return (
        <div className='py-10'>
            <div className='flex justify-evenly items-center lg:w-[80%] w-[90%] mx-auto'>
                <div className='flex justify-center items-center gap-10 w-full h-full'>
                    <div className='flex justify-center items-center w-full h-[90vh] lg:h-[70vh]'>
                        <div className="relative flex justify-between items-center w-full h-full flex-col overflow-hidden">
                            <span className="flex justify-center items-center text-xl lg:text-4xl text-gray-100 w-full text-center font-bold">Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality Prospera Hospitality</span>
                        <div className='w-full absolute top-0 bottom-0 my-auto left-0 flex justify-center items-center flex-col lg:flex-row '>


                            <div className='relative h-[400px] w-[400px] lg:w-[500px] lg:h-[500px] flex justify-center items-center'>
                                <div className='absolute top-0 left-0  w-full h-full flex justify-center items-center'>
                                    <div className='relative w-[80%] h-[80%] flex justify-center items-center'>
                                        <div className='absolute bottom-0 right-0 border w-[90%] h-[90%] bg-white rounded-br-[50%] flex justify-center flex-col shadow-lg py-5'>
                                            <div className='w-full flex justify-end items-center'>
                                                <div className='flex justify-start items-start w-[60%] flex-col'>
                                                    <h2 className='text-xl font-semibold text-[#800000]'>Ankit Singh</h2>
                                                    <span className='text-sm text-gray-400'>Frontend Developer</span>
                                                    <div className='flex gap-1'>
                                                        <span><FaStar className='size-3 text-[#800000]' /></span>
                                                        <span><FaStar className='size-3 text-[#800000]' /></span>
                                                        <span><FaStar className='size-3 text-[#800000]' /></span>
                                                        <span><FaStar className='size-3 text-[#800000]' /></span>
                                                        <span><FaStar className='size-3 text-gray-400' /></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='py-10 lg:p-5 w-full h-full flex justify-center items-center'>
                                                <p className='text-sm text-gray-400 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil repellendus itaque odio fuga excepturi illum quae veniam quibusdam, sint rem hic obcaecati et temporibus aliquid doloribus eveniet omnis molestiae?</p>
                                            </div>
                                        </div>
                                        <div className='absolute top-0 left-0 w-[40%] h-[40%] bg-black rounded-br-[50%] overflow-hidden shadow-xl'>
                                            <Image src={IMAGES.profile} fill className='w-full h-full object-cover' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='relative h-[400px] w-[400px] lg:w-[500px] lg:h-[500px] flex justify-center items-center'>
                                <div className='absolute top-0 left-0  w-full h-full flex justify-center items-center'>
                                    <div className='relative w-[80%] h-[80%] flex justify-center items-center'>
                                        <div className='absolute bottom-0 right-0 border w-[90%] h-[90%] bg-white rounded-br-[50%] flex justify-center flex-col shadow-lg py-5'>
                                            <div className='w-full flex justify-end items-center'>
                                                <div className='flex justify-start items-start w-[60%] flex-col'>
                                                    <h2 className='text-xl font-semibold text-[#800000]'>Ankit Singh</h2>
                                                    <span className='text-sm text-gray-400'>Frontend Developer</span>
                                                    <div className='flex gap-1'>
                                                        <span><FaStar className='size-3 text-[#800000]' /></span>
                                                        <span><FaStar className='size-3 text-[#800000]' /></span>
                                                        <span><FaStar className='size-3 text-[#800000]' /></span>
                                                        <span><FaStar className='size-3 text-[#800000]' /></span>
                                                        <span><FaStar className='size-3 text-gray-400' /></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='py-10 lg:p-5 w-full h-full flex justify-center items-center'>
                                                <p className='text-sm text-gray-400 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil repellendus itaque odio fuga excepturi illum quae veniam quibusdam, sint rem hic obcaecati et temporibus aliquid doloribus eveniet omnis molestiae?</p>
                                            </div>
                                        </div>
                                        <div className='absolute top-0 left-0 w-[40%] h-[40%] bg-black rounded-br-[50%] overflow-hidden shadow-xl'>
                                            <Image src={IMAGES.profile} fill className='w-full h-full object-cover' />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        </div>


                    </div>




                </div>

            </div>
        </div>
    )
}

export default Testimonial