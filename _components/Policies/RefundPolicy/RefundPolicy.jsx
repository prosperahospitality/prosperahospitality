import React from 'react'
import Image from 'next/image'
import IMAGES from '@/public/index'
import Link from 'next/link'
import { MoveUpRight } from 'lucide-react'

const RefundPolicy = () => {
    return (
        <div>
            <div className="h-[274px] md:h-[350px] lg:h-[400px] xl:h-[30rem]">
                <div className="w-screen h-[274px] md:h-[350px] lg:h-[400px] xl:h-[30rem] relative overflow-hidden">
                    <Image
                        alt="Mountains"
                        src={IMAGES.policy}
                        fill
                        sizes="(width: 100%)"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
            </div>
            <div className="text-xl text-primary-300 text-center font-extralight mt-4 md:text-2xl lg:text-4xl">
                <h1>Refund Policy</h1>
            </div>
            <div className=" w-[95%] m-auto">
                <div className="mt-5 mb-4">
                    <h3 className="text-xl mb-3 font-extralight text-primary-300">
                        Refund Policy
                    </h3>
                    <p className="text-base leading-relaxed">
                        As a part of our agreement, we have refund and cancellation policies with different hotels  However, we have a standard refund policy for hotels, which can be negotiated by the hoteliers. These policies can also change based on demand and forecast.
                    </p>
                </div>
                <div className='w-[90%] m-auto xl:w-[95%] xl:m-auto'>
                    <ul className='list-disc'>
                        <li>If cancelled 15 days before check-in date: 100 % Refund.​</li>
                        <li>If cancelled within 15 days and before 7 days to check-in date:50 % Refund.</li>
                        <li>If cancelled within 7 days before check-in date:No Refund.</li>
                    </ul>
                </div>
                <div className="mt-5 mb-4">
                    <p className="text-base leading-relaxed">
                        Subject to change.
                    </p>
                </div>
            </div>
            <div className="w-[95%] m-auto flex gap-5 flex-start mb-6 mt-6">
                <Link href="/tearms-and-conditions" passHref>
                    <div className="flex px-4 py-2 gap:[5px] md:gap-2 border-blue-500 text-blue-500 shadow-2xl border rounded font-semibold tracking-wide hover:bg-blue-500 hover:text-white">
                        Terms & Condition
                        <span className="flex justify-center items-center">
                            <MoveUpRight className="size-4" />
                        </span>
                    </div>
                </Link>

                <Link href="/policies/privacy-policy" passHref>
                    <div className="flex justify-center gap:[5px] md:gap-2 items-center px-4 py-2 border-white bg-blue-500 text-white shadow-2xl border rounded font-semibold tracking-wide hover:bg-blue-500 hover:text-white">
                        Privacy Policy
                        <span className="flex justify-center items-center">
                            <MoveUpRight className="size-4" />
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default RefundPolicy