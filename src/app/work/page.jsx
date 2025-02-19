import React from 'react'
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const workPage = () => {
  return (
    <>
    <h1 className='text-center text-4xl py-5'>My Work</h1>

    {/* Gallery for my work */}
    <div className='flex w-screen flex-col'>
        {/* Each Item */}
        <div className='w-3/4 m-auto text-center bg-blocks'>
            <div className='flex justify-center items-center'>
              <Link href={"https://github.com/Diego-Esquivias/Calculator-Assignment"} target="_blank">
                <FaGithub className="mr-3" size={25} />
              </Link>
              <h1>Calculator Page</h1>
            </div>
            
        </div>

        <div className='w-3/4 m-auto text-center'>
            <div className='flex justify-center items-center'>
              <Link href={"https://github.com/Diego-Esquivias/Tic-Tac-Toe"} target="_blank">
                <FaGithub className="mr-3" size={25} />
              </Link>
                <h1>Tic Tac Toe</h1>
            </div>
            
        </div>

        <div className='w-3/4 m-auto text-center'>
            <div className='flex justify-center items-center'>
              <Link href={"https://github.com/Diego-Esquivias/Card-Game-Memory"} target="_blank">
                <FaGithub className="mr-3" size={25} />
              </Link>
                <h1>Memory Card Game</h1>
            </div>
            
        </div>


    </div>
    </>
  )
}

export default workPage