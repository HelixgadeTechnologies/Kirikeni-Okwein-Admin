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
    location.replace("/reset-password")
  }
  return (
    <>
      <div className='flex w-screen h-screen overflow-hidden'>
        <div className='bg-[#eee] md:w-[50%] h-screen flex flex-col md:px-20 px-10 py-20 items-center justify-center text-left'>
          <Image src={Logo} alt=""/>
          <div className='text-left'>
          <h1 className='font-bold text-[#00z3338] text-[20px] py-3'>Kirekeni Okwein</h1>

          </div>
          <h1 className='text-[#242424] text-[50px] text-left'>Forgot Password</h1>
          <span className='text-[#323A46] px-3'>Enter your registered email address to reset your password and we will send you a link to reset your password.</span>
          <form className='w-full py-10' onSubmit={handleSubmit}> 
            <div>
              <label>Email:</label>
              <input className='w-full border rounded py-3 px-4 mb-5 ' placeholder='Enter Email' />
            </div>
            <a href='/otp'>
            <button className='bg-[#005259] rounded py-5 px-2 w-full text-white'>Continue</button>
            </a>
          </form>
        </div>
        <div className='bg-[#003338] w-[50%] hidden md:block'>
          <Image src={patterns} alt="" className='h-fit w-fit'/>
        </div>
      </div>
    </>
  )
}
