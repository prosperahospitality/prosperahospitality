'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import IMAGES from '@/public/index'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from "lucide-react";

const OurOffers = () => {
    const [occupancyRate, setOccupancyRate] = useState(60);
    const [repeatCustomerRate, setRepeatCustomerRate] = useState(80);
    const [customerSatisfaction, setCustomerSatisfaction] = useState(60);


    const cardData = [
        {
            alt: "diwali-festival",
            name: "diwali-with-vinifera",
            desktop: { src: IMAGES.festDiwali, width: 1600, height: 601, quality: 100 },
            mobile: {
                src: IMAGES.festDiwaliMob,
                width: 750,
                height: 1334,
                quality: 100,
            },
        },
        {
            alt: "kedarnath-yatra",
            name: "kedarnath yatra",
            desktop: {
                src: IMAGES.festKedarnath,
                width: 1600,
                height: 601,
                quality: 100,
            },
            mobile: {
                src: IMAGES.festKedarnathMob,
                width: 750,
                height: 1334,
                quality: 100,
            },
        },

        {
            alt: "christmas-festival",
            name: "christmas",
            desktop: {
                src: IMAGES.festChristmas,
                width: 1600,
                height: 601,
                quality: 100,
            },
            mobile: {
                src: IMAGES.festChristmasiMob,
                width: 750,
                height: 1334,
                quality: 100,
            },
        },]

    return (
        <div className="w-full flex justify-center items-center">
            <div className="flex gap-0 md:gap-4 lg:gap-16 p-4 w-[90%] lg:[80%] lg:justify-center lg:items-center">
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={true}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiperGuest"
                    style={{

                        "--swiper-navigation-size": "20px",

                    }}
                >
                    {cardData?.map((image, index) => (
                        <SwiperSlide key={index}>

                            <div>

                            </div>

                            <div>
                                <Image
                                    src={IMAGES.image1}
                                    objectFit='cover'
                                    alt={index}
                                    width={600}
                                    height={600}
                                    className='h-48 w-48'
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default OurOffers;
