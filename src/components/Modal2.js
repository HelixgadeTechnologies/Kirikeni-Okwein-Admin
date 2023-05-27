import React from 'react';
import Good from "@/assets/good.png"
import Image from 'next/image';

const Modal2 = ({ children, isOpen, link }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50">
    <div className='bg-white w-[506px] h-screen rounded-lg text-center flex  flex-col relative'>
    <div className="bg-white rounded-lg p-8 overflow-y-scroll h-screen">{children}</div>
    </div>
  </div>
  );
};

export default Modal2;
