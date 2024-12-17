import React from 'react'
import { PiGreaterThanBold } from "react-icons/pi";
import Image from 'next/image'
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <>
     <div className='  flex flex-col sm:flex-row items-center justify-between'>

      {/* left hero section */}
      <div className='h-60 sm:h-full p-10 ml-10 mb-20'>
       <div className=' font-bold text-xl sm:text-4xl'>
        <h1>BE SPIRITED FEARLESS AN</h1>
        <br />
        <h1>EVERYDAY ATHLETE</h1>
       </div>
         <br />
        <p> 
          A certified Running Coach And Personal Trainer For Over A  Decade, I,ve Helped <br />
          Thousands of Runners Thriugh 1-1 Personalized Coaching And Fitness Club.
        </p>
        <div>
          <button className='bg-slate-600 hover:bg-slate-800 w-36 h-11 mt-5 flex items-center justify-center text-white font-bold'>View Plans <PiGreaterThanBold className='h-4 w-8'/>
          </button>
        </div>
      </div>
       

       {/* hero image section */}
        <div>
        <Image
           src="/Assets/girl.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className='h-[500px] w-96 '
          style={{objectFit: "contain"}}
        />
        </div>

        {/* right hero section */}
        <div className='overflow-hidden'>
              <div className=' flex justify-center h-40 w-40   gap-2 sm:-rotate-90  '>
                <h4>Follow Us .</h4>
          <FaSquareFacebook />
          <IoLogoInstagram />
          <FaTwitterSquare />

              </div>
        </div>
        
     </div>
      
      
    </>
  )
}

export default Hero
