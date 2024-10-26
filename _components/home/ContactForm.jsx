'use client'
import IMAGES from '@/public'
import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import statesWithCities from '@/_lib/locations'

const ContactForm = () => {

    console.log("statesWithCities:::::>", statesWithCities)

    return (
        <div className='w-full flex justify-center items-center'>
            <div className='flex flex-row w-[80%] h-[80%] bg-gradient-to-r from-gray-300 via-gray-500 to-gray-500 rounded-2xl'>
                <div className='w-[40%] px-8 py-16'>

                    {/* <Image
                        alt="image"
                        src={IMAGES.policy}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover rounded-2xl"
                    /> */}

                    <div className='text-start text-3xl text-gray-600'>
                        <div>Let&apos;s grow your </div>
                        <div>business together!</div>
                    </div>
                </div>
                <div className='w-[60%] px-8 py-16'>
                    <div className='flex flex-col gap-4'>
                        <form>
                            <div>
                                <Input placeholder="Full Name"
                                    classNames={{
                                        inputWrapper: [
                                            "h-12",
                                        ],
                                    }}
                                />
                            </div>
                            <div>
                                <Input placeholder="Business Email"
                                    classNames={{
                                        inputWrapper: [
                                            "h-12",
                                        ],
                                    }}
                                />
                            </div>
                            <div>
                                <Input placeholder="Hotel / Company Name"
                                    classNames={{
                                        inputWrapper: [
                                            "h-12",
                                        ],
                                    }}
                                />
                            </div>
                            <div className='flex flex-row'>
                                <div className="flex w-full max-w-xs flex-col gap-2">
                                    {/* <Select
                                    label="Favorite Animal"
                                    variant="bordered"
                                    placeholder="State"
                                    selectedKeys={value}
                                    className="max-w-xs"
                                    onSelectionChange={setValue}
                                >
                                    {animals.map((animal) => (
                                        <SelectItem key={animal.key}>
                                            {animal.label}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <p className="text-small text-default-500">Selected: {value}</p> */}
                                </div>
                                <div className="flex w-full max-w-xs flex-col gap-2">
                                    {/* <Select
                                    label="Favorite Animal"
                                    variant="bordered"
                                    placeholder="City"
                                    selectedKeys={value}
                                    className="max-w-xs"
                                    onSelectionChange={setValue}
                                >
                                    {animals.map((animal) => (
                                        <SelectItem key={animal.key}>
                                            {animal.label}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <p className="text-small text-default-500">Selected: {value}</p> */}
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <Input placeholder="Country Code" />
                                <Input placeholder="Phone Number" />
                            </div>
                            <div>
                                By submitting your details, you confirm that you would like to receive
                                marketing emails from prospera hospitality and you agree to the storing and
                                processing of your personal data by prospera hospitality as described in
                                our privacy policy.
                            </div>
                            <div>
                                <Button>Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm