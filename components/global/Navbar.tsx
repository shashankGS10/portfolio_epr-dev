import React from 'react';
import Image from 'next/image';
import fecond from '../../ffy3.svg'


const Navbar = async () => {
  return (
    <header className='fixed right-0 left-0 top-0 px-4 py-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between '>
        <div className='flex flex-row'>
            <p className='font-extrabold' style={{fontSize:35}}>Ab</p>
            <Image 
            src={fecond}
            width={50}
            height={50}
            alt='fecond_log'
            className='shadow-sm'/>
            <p className='font-extrabold'  style={{fontSize:35}}>ut Me</p>
        </div>
        
    </header>
  )
}

export default Navbar