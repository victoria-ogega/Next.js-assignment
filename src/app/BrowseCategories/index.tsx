"use client"

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { PiHeadphones } from "react-icons/pi";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { useState } from "react";



export const Browse: React.FC = ()=>{
     const links = [
    { icon: <IoIosPhonePortrait />, name: "phones" },
    { icon: <HiOutlineComputerDesktop />, name: "computers" },
    { icon: <BsSmartwatch />, name: "smartWatch" },
    { icon: <CiCamera />, name: "camera" },
    { icon: <PiHeadphones />, name: "Headphones" },
    { icon: <MdOutlineVideogameAsset />, name: "Gaming" },
  ];

  const [selected, setSelected]= useState('camera')
return(
    <div className="">
<div>
        <div className="mb-8 flex items-center">
          <div className="w-3 h-8 bg-red-600 rounded-sm mr-4" />
          <span className="text-red-600 font-semibold">Categories</span>
        </div>
        <h2 className="text-3xl font-bold mb-8">View By Categories</h2>
        </div>
        
      <div>
      <ul className="flex text-5xl gap-5 border-b-2 border-gray-300 h-40 ">
        {links.map(({ icon, name }) => {
            const isActive= selected===name;
            return(
          <li key={name} className={`border-2 border-gray-300 w-35 h-23 pt-3 pl-7 ${isActive?"bg-red-600 border-none text-white ":"text-black"} `}
          onClick={()=>setSelected(name)}>
            {icon}
           {<p className="text-sm pl-3">{name}</p>}
          </li>
        )})}
      </ul>
    </div>
     
    </div>
)
}