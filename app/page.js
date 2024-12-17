"use client"
import React from 'react'
import Image from 'next/image'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'


const Page = () => {
  return (
    <>
      <div>
      <Image
      src="/Assets/background.jpeg"
      width={500}
      height={500}
      alt="background image"
      className='h-full w-full fixed -z-10 overflow-hidden'
    />
      </div>
    <Header/>
    <Hero/>
    <Footer/>
    </>
 
  )
}

export default Page
