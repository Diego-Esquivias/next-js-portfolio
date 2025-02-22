import React from 'react'
import Link from "next/link";
import { FaArrowCircleDown } from "react-icons/fa";
import Image from "next/image";

const resumePage = () => {
  return (
    <>
    {/* A little snippet from my resume */}
    <div className='w-4/5 lg:w-1/2 mx-auto mt-5 text-center bg-blocks p-5 rounded-xl'>
      <h1 className='text-3xl mb-2'>My Objective</h1>
      <Image
        src="https://res.cloudinary.com/dom4vyzw7/image/upload/v1740198021/coding_se4slo.webp"
        alt="Coding"
        width={250}
        height={250}
        className="mx-auto my-5 rounded-2xl"
      />
      <p className='text-lg'>West-MEC student studying many languages like HTML, CSS, JS, and Python, anticipating working as an entry-level web developer or game developer. Responsible, motivated, and patient developer looking for a job offering challenging web development or game development experience. </p>
    </div>
    
    {/* Button to download full resume */}
    <div className='w-2/3 lg:w-1/4 mx-auto mt-5 text-center p-3 rounded-full bg-black'>
      <Link href={"/Resume.pdf"} target="_blank" className='flex justify-center items-center text-2xl hover:animate-bounce'>
        Download Resume
        <FaArrowCircleDown size={35} className='ml-4'/>
      </Link>
    </div>
    </>
  )
}

export default resumePage