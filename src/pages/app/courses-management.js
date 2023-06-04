import CourseCard from '@/components/CourseCard';
import Layout from '@/components/layout'
import React, { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import Header from '@/components/Header';

function CourseManagement() {
  const [switchOpen, setSwitchOpen] = useState("one");

    const cardData = [
        {
          image: '/image1.jpg',
          heading: 'Introduction to Kirikeni',
          paragraph: 'Learn basic pronunciations in the Kirikeni language.',
        },
       
        {
            image: '/image1.jpg',
            heading: 'Introduction to Kirikeni',
            paragraph: 'Learn basic pronunciations in the Kirikeni language.',
          },
          {
            image: '/image1.jpg',
            heading: 'Introduction to Kirikeni',
            paragraph: 'Learn basic pronunciations in the Kirikeni language.',
          },
          {
            image: '/image1.jpg',
            heading: 'Introduction to Kirikeni',
            paragraph: 'Learn basic pronunciations in the Kirikeni language.',
          },
          {
            image: '/image1.jpg',
            heading: 'Introduction to Kirikeni',
            paragraph: 'Learn basic pronunciations in the Kirikeni language.',
          },
          {
            image: '/image1.jpg',
            heading: 'Introduction to Kirikeni',
            paragraph: 'Learn basic pronunciations in the Kirikeni language.',
          },
      ];
      
  return (
    <Layout isActivePage="COURSES MANAGEMENT">
       <Header Title={"User Management"} BtnText={"Add User"}>
          <div className="bg-white flex justify-between w-full mt-3 h-[96px] items-center px-10 py-5 rounded">
            <div>
            <p className="text-[20px] font-bold">Dashboard</p>
            <div className="flex text-[#727A8B]">
              <p className={`pr-5 pt-5 pb-3 ${switchOpen=="one"?"text-[#5141A4] border-b border-[#5141A4]":"text-[#727A8B]"}`} onClick={()=>setSwitchOpen("one")}>User List</p>
              <p className={`pt-5 pb-3 ${switchOpen=="two"?"text-[#5141A4]  border-b border-[#5141A4]":"text-[#727A8B] "}`} onClick={()=>setSwitchOpen("two")}>Sub Admin List</p>
            </div>

            </div>
            {
              switchOpen=="one"? <a
              className="bg-[#005259] text-white py-4 px-5 h-[56px]"
              onClick={ModalControl}
            >
              <AddIcon /> Delete Admin
            </a>: <a
              className="bg-[#005259] text-white py-4 px-5 h-[56px]"
              onClick={ModalControl4}
            >
              <AddIcon /> Edit Admin
            </a>
            }
           
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
        </Header>
        <p className='text-[16px] pt-5'>Courses</p>
      <div className='bg-white mt-5 overflow-scroll max-h-[600px] scrollbar scrollbar-thumb-gray-500 scrollbar-track'>
      <div className="p-8">
      <div className="relative my-1">
        <input
          type="text"
          className="py-2 px-8 py-2 mx-[2px] pl-16 rounded-lg border border-gray-300 focus:ring focus:border-blue-500 focus:outline-none w-[500px]  bg-[#F3F4F5] bg-opacity-20 text-white"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 left-3 pr-3 flex items-center pointer-events-none">
          <SearchIcon
            className="mx-5 my-4 text-gray-400 "
            style={{ color: "#D0D3D8" }}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-8">
        {cardData.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-8">
            <CourseCard  heading={card.heading} paragraph={card.paragraph} />
          </div>
        ))}
      </div>
    </div>
      </div>
    </Layout>
  )
}

export default CourseManagement
