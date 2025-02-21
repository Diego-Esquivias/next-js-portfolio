import React from 'react'
import Link from "next/link";
import { FaArrowCircleDown } from "react-icons/fa";

const resumePage = () => {
  return (
    <>
    <div className='w-4/5 mx-auto mt-5 text-center bg-blocks p-5 rounded-xl'>
      <h1 className='text-2xl mb-2'>My Objective</h1>
      <p className='text-lg'>West-MEC student studying many languages like HTML, CSS, JS, and Python, anticipating working as an entry-level web developer or game developer. Responsible, motivated, and patient developer looking for a job offering challenging web development or game development experience. </p>
    </div>
    
    <div className='w-2/3 mx-auto mt-5 text-center p-3 rounded-full bg-[#3f504d]'>
      <Link href={"https://docs.google.com/document/d/1itoua0ZOxXgW823LPR7XoYbfO0NSwaRdXV_XLSNSt9A/edit?tab=t.0"} target="_blank" className='flex justify-center items-center text-2xl'>
        Download
        <FaArrowCircleDown size={35} className='ml-4'/>
      </Link>
    </div>
    </>
  )
}

export default resumePage