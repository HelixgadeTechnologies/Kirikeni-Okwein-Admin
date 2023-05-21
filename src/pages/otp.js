import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import patterns from "@/assets/patterns.png"
import Logo from "@/assets/logo.png"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const handleSubmit = (e) =>{
    e.preventDefault()
    location.replace("/login")
  }
  return (
    <>
      <div className='flex w-screen h-screen overflow-hidden'>
        <div className='bg-[#eee] md:w-[50%] h-screen flex flex-col md:px-20 px-10 py-20 items-center justify-center text-left'>
          <Image src={Logo} alt=""/>
          <h1 className='font-bold text-[#003338] text-[20px] py-3'>Kirekeni Okwein</h1>
          <h1 className='text-[#242424] text-[50px]'>OTP Verification</h1>
          <span className='text-[#323A46] px-3'>Enter your Credentials below to get Started with the Kirikeni Okwien Admin portal.</span>
          <form className='w-full py-10' onSubmit={handleSubmit}>
            <div>
              {/* <label>Email:</label> */}
              <div className='flex'>
              <input className='w-full border rounded py-3 px-4 mb-5' placeholder='0' />
              <input className='w-full border rounded py-3 px-4 mb-5' placeholder='0' />
              <input className='w-full border rounded py-3 px-4 mb-5' placeholder='0' />
              <input className='w-full border rounded py-3 px-4 mb-5' placeholder='0' />
              <input className='w-full border rounded py-3 px-4 mb-5' placeholder='0' />
              <input className='w-full border rounded py-3 px-4 mb-5' placeholder='0' />
              </div>
             
            </div>
            <p>Didn’t get an OTP? <span className='text-[#92400E]'>Resend after</span> <b>00:25</b></p>
            <button className='bg-[#005259] rounded py-5 px-2 w-full text-white'>Login</button>
          </form>
        </div>
        <div className='bg-[#003338] w-[50%] hidden md:block'>
          <Image src={patterns} alt="" className='h-fit w-fit'/>
        </div>
      </div>
    </>
  )
}
