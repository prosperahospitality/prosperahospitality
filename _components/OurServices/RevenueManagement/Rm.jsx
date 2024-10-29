import React from 'react'
import { Button } from "@nextui-org/react";
import Image from 'next/image'
import IMAGES from "@/public/index";

const Rm = () => {
    return (
        <div className='w-full'>
            <div className='w-[90%] lg:w-[80%] m-auto bg-gray-100 rounded-2xl'>
                <div className='grid grid-cols-2 gap-3 pl-4'>
                    <div className=' p-3 flex justify-center item-center flex-col gap-10'>
                        <h2 className='text-3xl lg:text-5xl font-semibold text-start text-gray-600'>Understand the secret
                            of Growing a Business!</h2>
                        <p className='text-gray-600 font-normal'>Get tips on how to grow your hotel business from the
                            pros of ths industry, understand the value of strategic
                            pricing and the skill of managing the property online
                            on multiple platforms </p>
                        <div className="flex justify-start gap-4 text-gray-500">
                            <Button variant="shadow" color="default" className="bg-[#800000] text-white" radius="none" size="md">
                                Schedule a Call
                            </Button>
                        </div>
                    </div>

                    <div className='flex relative overflow-hidden h-[25rem]' >
                        <div className='w-[55%] h-[20rem] overflow-hidden rounded-full absolute -bottom-10 -right-10'>
                            <Image
                                alt="Mountains"
                                src={IMAGES.testone}
                                fill
                                style={{
                                    objectFit: 'cover',
                                    width: "100%",
                                    height: "100%"
                                }}
                            />
                        </div>
                        <div className='w-[68%] h-[24rem] overflow-hidden rounded-full absolute -bottom-[50%] right-[8.4rem]'>
                            <Image
                                alt="Mountains"
                                src={IMAGES.test}
                                fill
                                style={{
                                    objectFit: 'cover',
                                    width: "100%",
                                    height: "100%"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rm
