import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import patterns from "@/assets/patterns.png"
import Logo from "@/assets/logo.png"
import Modal from '@/components/Modal'
import { useState } from 'react'
import TextLogo from "@/assets/text-logo.png"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const ModalControl = () => {
      setIsModalOpen(!isModalOpen);
    };
    const handleSubmit = (e) =>{
      e.preventDefault()
      ModalControl()

    }
  return (
    <>
      <div className='flex w-screen h-screen overflow-hidden'>
      <div className='bg-[#F3F4F5] md:w-[53.9%] h-screen flex flex-col md:px-[115px] px-10 pt-[42px] items-start justify-left text-left'>
      <div className='flex flex-col justify-center items-center w-full py-10 space-y-2'>
            <Image src={Logo} alt=""/>
            <Image src={TextLogo} alt=""/>
            {/* <h1 className='font-bold text-[#003338] text-[20px] py-3'>Kirekeni Okwein</h1> */}
          </div>
          <h1 className='text-[#242424] text-[45px] tracking-[1.0px] leading-[1.3] font-[500] text-left pb-0 '>Reset Password</h1>
          <span className='text-[#323A46] text-[13px] font-[400]'>Enter your Credentials below to get Started with the Kirikeni Okwien Support portal.</span>
          <form className='w-full py-6' onSubmit={handleSubmit}>
            <div>
              <label className='text-[13px] mt-0'>New Password:</label>
              <input className='w-full border bg-[#FAFAFA] rounded-[8px] py-3 px-4 mb-5 mt-1 ' placeholder='Enter new password' />
            </div>
            <div>
              <label className='text-[13px] mt-0'>Confirm Password:</label>
              <input type={"password"} className='w-full border bg-[#FAFAFA] rounded-[8px] py-3 px-4 mb-5 mt-1' placeholder='Enter new password' />
            </div>
            <button className='bg-[#005259] rounded-[8px] py-[13px] px-[10px] mt-4 text-[15px] w-full text-white'>Continue</button>
          </form>
        </div>
        <div className='bg-[#003338] w-[46.1%] hidden md:block'>
          <Image src={patterns} alt="" className='h-fit w-fit'/>
        </div>
      </div>
      <Modal isOpen={isModalOpen} link="/login"/>

    </>
  )
}
