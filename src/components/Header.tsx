import React from 'react'
import { Button } from './ui/button'
import { FaRegMoon } from "react-icons/fa";

const Header = () => {
  return (
    <div className='flex justify-between p-5'>
        <div className='h-8 w-8 rounded-full hover:bg-white flex justify-center items-center hover:cursor-pointer'>
            <FaRegMoon />
        </div>
        <div className='flex gap-5'>
            <Button variant='ghost' className='text-white bg-transparent border-none hover:bg-white hover:text-black'>Wallet</Button>
            <Button variant='ghost' className='text-white bg-transparent border-none hover:bg-white hover:text-black'>Swap</Button>
            <Button variant='ghost' className='text-white bg-transparent border-none hover:bg-white hover:text-black'>Stack</Button>
            <Button variant='ghost' className='text-white bg-transparent border-none hover:bg-white hover:text-black'>NFTs</Button>
        </div>
    </div>
  )
}

export default Header