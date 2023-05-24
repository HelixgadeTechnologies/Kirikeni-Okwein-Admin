import React from 'react';
import Good from "@/assets/good.png"
import Image from 'next/image';

const Modal = ({ isOpen, link }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='w-screen h-screen bg-black bg-opacity-20 absolute top-0 righ-0 z-[100px] flex items-center justify-center '>
    <div className='bg-white w-[506px] h-[260px] rounded-lg px-10 py-5 text-center flex items-center justify-center flex-col relative'>
        <div className='bg-[#43C148] shadow-2xl h-20 w-20 rounded-full absolute -top-10 flex justify-center items-center'>
          <Image src={Good} alt="" className='w-[30.33px] h-[20.67px]'/> 
        </div>
        <p className='py-2 pt-10'>DONE</p>
        <h1 className='text-4xl py-2'>Reset successful</h1>
        <a href={link} className='bg-[#005259] w-full py-5 px-5 text-white'>
        <button>Login</button>
        </a>
    </div>
  </div>
  );
};

export default Modal;
