import React from 'react'
import IMAGES from '@/public'
import Image from 'next/image'
import { Card, CardBody } from "@nextui-org/react";

const Description = () => {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center lg:w-[80%] w-[90%] gap-16'>
                <div className="mt-4 text-center">
                    <h1 className='text-3xl sm:text-4xl font-bold text-gray-800'>Elevate Your Online Presence</h1>
                    <h2 className='text-xl sm:text-2xl mt-2 font-medium text-gray-700'>Your Vision, Our Expertise</h2>
                    <p className='text-base sm:text-lg mt-4 font-normal text-gray-500'>
                        Partner with us for top-notch website development and maintenance that keeps your business ahead of the curve.
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-8'>
                    <div className='lg:w-[55%] w-full'>
                        <Image
                            src={IMAGES.section1}
                            alt={`Image`}
                            width={600}
                            height={600}
                            quality={100}
                            className='object-scale-down h-full w-full'
                        />
                    </div>
                    <div className='lg:w-[45%] w-full grid grid-cols-1 sm:grid-cols-2 gap-4 justify-end items-right'>

                        <div className='hover:shadow-2xl transition-shadow duration-400 ease-in-out rounded-xl'>
                            <Card className="py-4">
                                <CardBody className="pb-0 pt-2 px-4 py-2 flex-col items-start">
                                    <Image
                                        alt="Card background"
                                        className="object-scale-down rounded-xl"
                                        src={IMAGES.card1}
                                        width={200}
                                        height={200}
                                    />
                                    <div className='flex flex-col justify-center items-center text-center gap-3'>
                                        <p className="text-base sm:text-lg uppercase font-bold">Tailored Web Solutions</p>
                                        <p className="text-default-500 text-sm sm:text-base">Delivering personalized web solutions that cater to your specific business objectives and audience requirements.</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>

                        <div className='hover:shadow-2xl transition-shadow duration-800 ease-in-out rounded-xl'>
                            <Card className="py-4 h-80">
                                <CardBody className="pb-0 pt-2 px-4 py-2 flex-col items-start">
                                    <Image
                                        alt="Card background"
                                        className="object-scale-down rounded-xl h-28"
                                        src={IMAGES.card2}
                                        width={270}
                                        height={270}
                                    />
                                    <div className='flex flex-col justify-center items-center text-center gap-3'>
                                        <p className="text-base sm:text-lg uppercase font-bold">Website Maintenance</p>
                                        <p className="text-default-500 text-sm sm:text-base">Regular updates and support to keep your website running smoothly and securely.</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>

                        <div className='hover:shadow-2xl transition-shadow duration-400 ease-in-out rounded-xl'>
                            <Card className="py-4">
                                <CardBody className="pb-0 pt-2 px-4 py-2 flex-col items-start">
                                    <Image
                                        alt="Card background"
                                        className="object-scale-down rounded-xl h-28"
                                        src={IMAGES.card3}
                                        width={270}
                                        height={270}
                                    />
                                    <div className='flex flex-col justify-center items-center text-center gap-3'>
                                        <p className="text-base sm:text-lg uppercase font-bold">Branding and Graphic Design</p>
                                        <p className="text-default-500 text-sm sm:text-base">Creating cohesive branding and visually appealing graphics that enhance your online presence and reflect your brand&apos;s identity.</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>

                        <div className='hover:shadow-2xl transition-shadow duration-400 ease-in-out rounded-xl'>
                            <Card className="py-4 hover:shadow-xl transition-shadow duration-300">
                                <CardBody className="pb-0 pt-2 px-4 py-2 flex-col items-start">
                                    <Image
                                        alt="Card background"
                                        className="object-scale-down rounded-xl h-28"
                                        src={IMAGES.card4}
                                        width={270}
                                        height={270}
                                    />
                                    <div className='flex flex-col justify-center items-center text-center gap-3'>
                                        <p className="text-base sm:text-lg uppercase font-bold">Hosting and Domain Services</p>
                                        <p className="text-default-500 text-sm sm:text-base">Providing reliable hosting solutions and domain registration services to ensure your website is always accessible and secure.</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description;
