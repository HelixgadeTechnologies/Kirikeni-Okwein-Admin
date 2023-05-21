import CourseCard from '@/components/CourseCard';
import Layout from '@/components/layout'
import React from 'react'
import SearchIcon from "@mui/icons-material/Search";

function CourseManagement() {
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
        <p className='text-[16px] pt-5'>Courses</p>
      <div className='bg-white mt-5 overflow-scroll max-h-[400px] scrollbar scrollbar-thumb-gray-500 scrollbar-track'>
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
