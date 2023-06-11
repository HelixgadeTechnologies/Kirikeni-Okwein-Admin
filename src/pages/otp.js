import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import patterns from "@/assets/patterns.png"
import Logo from "@/assets/logo.png"
const inter = Inter({ subsets: ['latin'] })
import { useState, useRef } from 'react';

export default function Home() {
  const handleSubmit = (e) =>{
    e.preventDefault()
    location.replace("/login")
  }
  const [values, setValues] = useState(['', '', '', '', '', '']);
  const refs = useRef([]);

  const handleChange = (index, event) => {
    const newValues = [...values];
    newValues[index] = event.target.value;
    setValues(newValues);

    if (event.target.value.length === 1 && index < refs.current.length - 1) {
      refs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && index > 0 && values[index] === '') {
      refs.current[index - 1].focus();
    }
  };

  return (
    <>
      <div className='flex w-screen h-screen overflow-hidden'>
        <div className='bg-[#eee] md:w-[50%] h-screen flex flex-col md:px-20 px-10 py-32 items-start justify-center text-left'>
        <div className='flex flex-col justify-center items-center w-full'>
            <Image src={Logo} alt=""/>
            <h1 className='font-bold text-[#003338] text-[20px] py-3'>Kirekeni Okwein</h1>
          </div>
          <h1 className='text-[#242424] text-[45px] text-left'>OTP Verification</h1>
          <span className='text-[#323A46]'>Enter your Credentials below to get Started with the Kirikeni Okwien Admin portal.</span>
          <form className='w-full py-8' onSubmit={handleSubmit}>
            <div>
              {/* <label>Email:</label> */}
              {/* <div className='flex space-x-4'>
              <input className='w-full border rounded py-3 px-3 mb-5 text-center' placeholder='0' />
              <input className='w-full border rounded py-3 px-4 mb-5 text-center' placeholder='0' />
              <input className='w-full border rounded py-3 px-4 mb-5 text-center' placeholder='0' />
              <input className='w-full border rounded py-3 px-4 mb-5 text-center' placeholder='0' />
              <input className='w-full border rounded py-3 px-4 mb-5 text-center' placeholder='0' />
              <input className='w-full border rounded py-3 px-4 mb-5 text-center' placeholder='0' />
              </div> */}
              <div className='flex space-x-4'>
      {values.map((value, index) => (
        <input
          key={index}
          ref={(el) => (refs.current[index] = el)}
          className='w-full border rounded py-3 px-4 mb-5 text-center'
          placeholder='0'
          value={value}
          onChange={(event) => handleChange(index, event)}
          onKeyDown={(event) => handleKeyDown(index, event)}
        />
      ))}
    </div>
             
            </div>
            <p className='py-5'>Didn’t get an OTP? <span className='text-[#92400E]'>Resend after</span> <b>00:25</b></p>
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
