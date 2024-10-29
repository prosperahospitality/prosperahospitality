import React from 'react'
import Image from 'next/image'
import IMAGES from '@/public/index'

const TearmsAndConditions = () => {

    const data = [
        {
            "id": 1,
            "heading": "Terms and Conditions",
            "para": "These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”), and Prospera Hospitality LLP (“we”, “us”, or “our”), concerning your access to and use of the https://www.prosperahospitality.com website, as well as any other media form, media channel, mobile website, or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”)."
        },

        {
            "id": 2,
            // "heading": "Terms and Conditions",
            "para": "You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY."
        },

        {
            "id": 3,
            // "heading": "Terms and Conditions",
            "para": "All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Site. If you are a minor, you must have your parent or guardian read and agree to these Terms of Use prior to you using the Site."
        },

        {
            "id": 4,
            "heading": "Terms Of Use",
            "para": "Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of India, international copyright laws, and international conventions. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission."
        },

        {
            "id": 5,
            // "heading": "Terms and Conditions",
            "para": "Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks."
        },



    ]

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
                            objectFit: 'cover', // cover, contain, none
                        }}
                    />
                </div>
            </div>

            <div className="text-xl text-primary-300 text-center font-extralight mt-4 md:text-2xl lg:text-4xl">
                {'Terms and Condtiton'}
            </div>

            {data.map((item) => (
                <div key={item.id} className="w-[90%] lg:w-[80%] m-auto">
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
    )
}

export default TearmsAndConditions