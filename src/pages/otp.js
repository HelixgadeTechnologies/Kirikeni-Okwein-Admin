import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import patterns from "@/assets/patterns.png"
import Logo from "@/assets/logo.png"
const inter = Inter({ subsets: ['latin'] })
import { useState, useRef } from 'react';
import TextLogo from "@/assets/text-logo.png"


export default function Home() {
  const [values, setValues] = useState(['', '', '', '']);
  const handleSubmit = (e) =>{
    e.preventDefault()
    let otp = parseInt(values.join(''), 10);
    console.log(otp)
    // location.replace("/login")
  }
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
      <div className='bg-[#F3F4F5] md:w-[53.9%] h-screen flex flex-col md:px-[115px] px-10 pt-[42px] items-start justify-left text-left'>
        <div className='flex flex-col justify-center items-center w-full py-10 space-y-2'>
            <Image src={Logo} alt=""/>
            <Image src={TextLogo} alt=""/>
            {/* <h1 className='font-bold text-[#003338] text-[20px] py-3'>Kirekeni Okwein</h1> */}
          </div>
          <h1 className='text-[#242424] text-[45px] tracking-[1.0px] leading-[1.3] font-[500] text-left pb-0 '>OTP Verification</h1>
          <span className='text-[#323A46] text-[13px] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper odio sagittis sit sit iaculis phasellus molestie quam..</span>
          <form className='w-full py-6' onSubmit={handleSubmit}>
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
              <div className='flex space-x-3 mx-20'>
      {values.map((value, index) => (
        <input
          key={index}
          ref={(el) => (refs.current[index] = el)}
          className='w-full border rounded-lg py-3 px-3 mb-5 text-center'
          placeholder='0'
          value={value}
          onChange={(event) => handleChange(index, event)}
          onKeyDown={(event) => handleKeyDown(index, event)}
        />
      ))}
    </div>
             
            </div>
            <p className='py-0 text-[15px]'>Didn’t get an OTP? <span className='text-[#92400E]'>Resend after</span> <b>00:25</b></p>
            <button className='bg-[#005259] rounded-[8px] py-[13px] px-[10px] mt-8 text-[15px] w-full text-white'>Login</button>
          </form>
        </div>
        <div className='bg-[#003338] w-[46.1%] hidden md:block'>
          <Image src={patterns} alt="" className='h-fit w-fit'/>
        </div>
      </div>
    </>
  )
}
