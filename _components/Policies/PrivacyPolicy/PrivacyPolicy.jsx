import React from 'react'
import Image from 'next/image'
import IMAGES from '@/public/index'
import Link from 'next/link'
import { MoveUpRight } from 'lucide-react'

const PrivacyPolicy = () => {

    const data = [
        {
            id: 1,
            heading: "Personal Information",
            para: "Prospera Hospitality collects information from online forms, emails, and the pages you visit on our website after clicking emails or completing online forms. We may also use Cookies to identify you when you visit our site in order to understand our visitors. Your data is held with us till you consent. It is held until you withdraw your consent."
        },
        {
            id: 2,
            heading: "Use Of Personal Information",
            para: "For providing and personalizing our services and website. Dealing with enquiries.Understanding your interest and providing relevant content. Providing you with information about our products and services. "
        },
        {
            id: 3,
            heading: "Cookies",
            para: "Prospera Hospitality uses Cookies and analytics to understand user behavior on our website. These cookies are also used to identify you when you visit our website. "
        },
        {
            id: 4,
            heading: "Disclosure",
            para: "Prospera Hospitality will not disclose any information collected by our website to third parties without the user’s consent.Prospera Hospitality does hold the right to store email address and other such information in our database. However, the information stored will be used to enhance user experience and for effective communication between us, Prospera Hospitality and the user."
        },
    ]

    return (
        <>
            <div>
                <div className="h-[274px] md:h-[350px] lg:h-[400px] xl:h-[30rem]">
                    <div className="w-screen h-[274px] md:h-[350px] lg:h-[400px] xl:h-[30rem] relative overflow-hidden">
                        <Image
                            alt="Mountains"
                            src={IMAGES.policy}
                            fill
                            sizes="(width: 100%)"
                            style={{
                                objectFit: 'cover', // cover, contain, none
                            }} />
                    </div>
                </div>

                <div className="text-xl text-primary-300 text-center font-extralight mt-4 md:text-2xl lg:text-4xl">
                    {'Privacy Policy'}
                </div>

                {data.map((item) => (
                    <div key={item.id} className=" w-[95%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-extralight text-primary-300">
                                {item.heading}
                            </h3>
                            <p className="text-base leading-relaxed">
                                {item.para}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
            <div className="w-[95%] m-auto flex gap-5 flex-start mb-6 mt-6">
                <Link href="/policies/Terms-Conditions" passHref>
                    <div className="flex px-4 py-2 gap:[5px] md:gap-2 border-blue-500 text-blue-500 shadow-2xl border rounded font-semibold tracking-wide hover:bg-blue-500 hover:text-white">
                        Terms & Condition
                        <span className="flex justify-center items-center">
                            <MoveUpRight className="size-4" />
                        </span>
                    </div>
                </Link>

                <Link href="/policies/refund-policy" passHref>
                    <div className="flex justify-center gap:[5px] md:gap-2 items-center px-4 py-2 border-white bg-blue-500 text-white shadow-2xl border rounded font-semibold tracking-wide hover:bg-blue-500 hover:text-white">
                        Refund Policy
                        <span className="flex justify-center items-center">
                            <MoveUpRight className="size-4" />
                        </span>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default PrivacyPolicy