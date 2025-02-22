import React from 'react'
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const workPage = () => {
  return (
    <>
    <h1 className='text-center text-4xl lg:text-6xl py-5'>My Work</h1>

    {/* Gallery for my work */}
    <div className='flex w-screen flex-col lg:flex-row lg:flex-wrap lg:justify-center lg:gap-1'>
        {/* Each Item */}
        <div className='w-3/4 lg:w-1/3 m-auto text-center bg-blocks p-5 rounded-xl'>
            {/* Title with github link to project */}
            <div className='flex justify-center items-center'>
              <Link href={"https://github.com/Diego-Esquivias/Calculator-Assignment"} target="_blank">
                <FaGithub className="mr-3" size={30} />
              </Link>
              <h1 className='text-2xl'>Calculator Page</h1>
            </div>

            {/* Project Image with link to website */}
            <Link href={"https://diego-esquivias.github.io/Calculator-Assignment/"} target="_blank">
              <Image
                src="https://res.cloudinary.com/dom4vyzw7/image/upload/v1740168772/calculator_zbsil5.png"
                alt="Calculator Page"
                width={300}
                height={100}
                className='mx-auto mt-4 rounded-xl border-2 border-white'
              />
            </Link>
        </div>

        <div className='w-3/4 lg:w-1/3 mx-auto text-center bg-blocks p-5 rounded-xl my-5 '>
            <div className='flex justify-center items-center'>
              <Link href={"https://github.com/Diego-Esquivias/Tic-Tac-Toe"} target="_blank">
                <FaGithub className="mr-3" size={30} />
              </Link>
                <h1 className='text-2xl'>Tic Tac Toe</h1>
            </div>
            
            <Link href={"https://diego-esquivias.github.io/Tic-Tac-Toe/"} target="_blank">
              <Image
                src="https://res.cloudinary.com/dom4vyzw7/image/upload/v1740168765/tictactoe_n6avh9.png"
                alt="Calculator Page"
                width={300}
                height={100}
                className='mx-auto mt-4 rounded-xl border-2 border-white'
              />
            </Link>
        </div>

        <div className='w-3/4 lg:w-1/3 m-auto text-center bg-blocks p-5 rounded-xl'>
            <div className='flex justify-center items-center'>
              <Link href={"https://github.com/Diego-Esquivias/Card-Game-Memory"} target="_blank">
                <FaGithub className="mr-3" size={30} />
              </Link>
                <h1 className='text-2xl'>Memory Card Game</h1>
            </div>

            <Link href={"https://github.com/Diego-Esquivias/Card-Game-Memory"} target="_blank">
              <Image
                src="https://res.cloudinary.com/dom4vyzw7/image/upload/v1740168779/memoryCardGame_rfsuqk.png"
                alt="Calculator Page"
                width={300}
                height={100}
                className='mx-auto mt-4 rounded-xl border-2 border-white'
              />
            </Link>
        </div>


    </div>
    </>
  )
}

export default workPage