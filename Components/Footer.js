import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <div className='-mt-28 p-1.5 m-6 sm:p-3 sm:ml-10 border-2 inline-block' >
      <h3 className='font-semibold'>What You Get</h3>
        <div className='flex text-xs gap-2'>
          <div className='inline-flex items-center  '>
            <Image
             src="/Assets/check.png"
             width={500}
             height={500}
             alt="Picture of the author"
             className='h-10 w-8'
             style={{objectFit: "contain"}}
            />
            <p>CUSTOMIZED <br /> FITNESS PLAN</p>
          </div>
          <div className='inline-flex items-center'>
          <Image
             src="/Assets/power.png"
             width={500}
             height={500}
             alt="Picture of the author"
             className='h-10 w-8'
             style={{objectFit: "contain"}}
            />
            <p>KEEP YOUR FEET <br /> AND STRONG</p>
          </div>
          <div className='inline-flex items-center'>
          <Image
             src="/Assets/haha.png"
             width={500}
             height={500}
             alt="Picture of the author"
             className='h-10 w-8'
             style={{objectFit: "contain"}}
            />
            <p>HIGH INTENSITY <br /> TRAINING</p>
          </div>
        
        </div>
      </div>
    </>
  )
}

export default Footer
