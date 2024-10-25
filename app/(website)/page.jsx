import Landing from '@/_components/Home/Landing'
import React from 'react'
import NumberStats from '@/_components/Home/NumberStats'
import HomeCards from '@/_components/home/HomeCards'
import Allpackages from '@/_components/home/Allpackages'
import OurOffers from '@/_components/Home/OurOffers'
import Blogs from '@/_components/Home/Blogs'
import InstagramFeed from '@/_components/Home/InstagramFeed'
import ContactForm from '@/_components/Home/ContactForm'
const Home = () => {
  return (
    <div className='flex flex-col gap-10 lg:gap-16'>
      <Landing />
      <HomeCards />
      <NumberStats />
      <Allpackages />
      <OurOffers />
      <Blogs />
      <InstagramFeed />
      <ContactForm />
    </div>
  )
}

export default Home