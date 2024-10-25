import IMAGES from '@/public'
import { Button, Input } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const ContactForm = () => {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='flex flex-row w-[80%] h-[80%]'>
                <div className='w-[50%]'>
                    {/* <Image
                        alt="image"
                        src={IMAGES.policy}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover rounded-2xl"
                    /> */}
                    <div>Let’s grow your </div>
                    <div>business together!</div>
                </div>
                <div className='w-[50%]'>
                    <div>
                        <Input placeholder="Full Name" />
                    </div>
                    <div>
                        <Input placeholder="Business Email" />
                    </div>
                    <div>
                        <Input placeholder="Hotel / Company Name" />
                    </div>
                    <div className='flex flex-row'>
                        <Input placeholder="State" />
                        <Input placeholder="Country" />
                    </div>
                    <div className='flex flex-row'>
                        <Input placeholder="Country Code" />
                        <Input placeholder="Phone Number" />
                    </div>
                    <div>
                        By submitting your details, you confirm that you would like to receive
                        marketing emails from Lighthouse and you agree to the storing and
                        processing of your personal data by Lighthouse as described in
                        our privacy policy.
                    </div>
                    <div>
                        <Button>Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm