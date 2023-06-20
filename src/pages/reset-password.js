import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import patterns from "@/assets/patterns.png"
import Logo from "@/assets/logo.png"
import Modal from '@/Components/Modal'
import { useState } from 'react'
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
      <div className='bg-[#eee] md:w-[50%] h-screen flex flex-col md:px-20 px-10 py-32 items-start justify-center text-left'>
        <div className='flex flex-col justify-center items-center w-full'>
            <Image src={Logo} alt=""/>
            <h1 className='font-bold text-[#003338] text-[20px] py-3'>Kirekeni Okwein</h1>
          </div>
          <h1 className='text-[#242424] text-[45px] text-left'>Reset Password</h1>
          <span className='text-[#323A46]'>Enter your Credentials below to get Started with the Kirikeni Okwien Support portal.</span>
          <form className='w-full py-10' onSubmit={handleSubmit}>
            <div>
              <label>New Password:</label>
              <input className='w-full border rounded py-3 px-4 mb-5 ' placeholder='Enter new password' />
            </div>
            <div>
              <label>Confirm Password:</label>
              <input type={"password"} className='w-full border rounded py-3 px-4 mb-5 ' placeholder='Enter new password' />
            </div>
            <button className='bg-[#005259] rounded py-5 px-2 w-full text-white'>Continue</button>
          </form>
        </div>
        <div className='bg-[#003338] w-[50%] hidden md:block'>
          <Image src={patterns} alt="" className='h-fit w-fit'/>
        </div>
      </div>
      <Modal isOpen={isModalOpen} link="/login"/>

    </>
  )
}
