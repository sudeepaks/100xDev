import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { TbGridDots } from "react-icons/tb";
import Avatar from 'react-avatar';

const Navbar = () => {
  const [SearchText, setSearchText] = useState("")
  return (
    <div className='flex items-center justify-between mx-3'>
        <div className='flex items-center gap-10'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <GiHamburgerMenu size={"20px"}/>
                </div>"
                    <img className='w-8' src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="gmail-logo"/>
                    <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
            </div>
        </div>
        <div className='md:block hidden w-[50%] mr-60'>
            <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full'>
                <IoIosSearch  size={"24px"} className='text-gray-700'/>
                <input 
                type='text' 
                placeholder='Search mail'
                className='rounded-full w-full bg-transparent outline-none px-1'
                />
            </div>
        </div>
        <div className='md:block hidden'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <CiCircleQuestion size={"20px"} />
                </div>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <CiSettings size={"20px"} />
                </div>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <TbGridDots size={"20px"} />
                </div>
                <div className='cursor-pointer'>
                   <Avatar src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=" size="40" round={true}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar