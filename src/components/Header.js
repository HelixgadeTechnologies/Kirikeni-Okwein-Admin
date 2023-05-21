import React from 'react'
import AddIcon from '@mui/icons-material/Add';

function Header() {
  return (
    <div>
      <div className='bg-white flex justify-between w-full mt-3 h-[96px] items-center px-10 rounded'>
        <p className='text-[20px] font-bold'>Course  Management</p>
        <a className='bg-[#005259] text-white py-4 px-5 h-[56px]'>
           <AddIcon/> Add course
        </a>
      </div>
      <div className='flex flex-grow mt-3 space-x-5'>
        <div className='bg-white px-5 py-3 rounded w-full'>
            <p className='text-[#727A8B]'>Total Courses</p>
            <b className='text-[28px]'>25</b>
        </div>
         <div className='bg-white px-5 py-3 rounded w-full'>
            <p className='text-[#727A8B]'>Average Learning time</p>
            <b className='text-[28px]'>125 hours</b>
        </div>
        <div className='bg-white px-5 py-3 rounded w-full'>
            <p className='text-[#727A8B]'>Completion rate</p>
            <b className='text-[28px]'>75%</b>
        </div>
        <div className='bg-white px-5 py-3 rounded w-full'>
            <p className='text-[#727A8B]'>Average Performance</p>
            <b className='text-[28px]'>72%</b>
        </div>
        
      </div>
    </div>
  )
}

export default Header
