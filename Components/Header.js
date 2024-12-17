import React from 'react'
import { FaReact } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FiAlignJustify } from "react-icons/fi";


const Header = () => {
  return (
  <>    
    <div className='w-full flex justify-between items-center pt-3'>
      {/* Logo */}
      <div className='p-10 ml-10 hidden sm:flex font-bold text-2xl items-center' >
        <a >
          < FaReact className='w-16 h-12'/>
        </a>
        Fitness Club
      </div>

{/* Options */}
        <div className='font-semibold hidden sm:flex items-center gap-11 mr-40 '>
          <div>
           <h4 className='ml-1'>Join </h4>
           <h4>Team </h4>
          </div>
          <div className='border-2 h-10'></div>
          <div>
           <h4 className='ml-0'>Free </h4>
           <h4>Pass </h4>
          </div>
          <div className='border-2 h-10'></div>

{/* Shopping Cart */}
         <div className='flex items-center'>
          <FaShoppingCart className='w-8 h-10' />
         </div>

      </div>

{/* Sheet, displayed in small screen only  */}
      <div className='sm:hidden pl-10'>
        <Sheet >
          <SheetTrigger>
          <FiAlignJustify className='w-16 h-8'/>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <div>
              <a >
               < FaReact className='w-8 h-8'/>
              </a>
            </div>
            <div className='block gap-10 font-semibold'>
             <div className='bg-slate-600 text-white'>
              <h4 className='ml-1'>Join</h4>
              <h4>Team</h4>
             </div>
             <div className='border-2'></div>
             <div className='bg-slate-600 text-white mt-4'>
              <h4>Free</h4>
              <h4>Pass</h4>
             </div>
            </div>
            
          </SheetContent>
        </Sheet>
      </div>
         
        <div className='sm:hidden pr-10'>
          <FaShoppingCart className='w-10 h-8' />
        </div>
      
    </div>
 </>

  )
}

export default Header
