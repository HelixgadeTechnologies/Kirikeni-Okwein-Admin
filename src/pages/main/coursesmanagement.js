import CourseCard from "@/components/CourseCard";
import Layout from "@/components/Layout";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Header from "@/components/Header";
import AddIcon from "@mui/icons-material/Add";
import Modal2 from "@/components/Modal2";
import DragAndDropBox from "@/components/DragAndDropBox";
import Link from "next/link";
import WestIcon from "@mui/icons-material/West";

function CourseManagement() {
  const [switchOpen, setSwitchOpen] = useState("one");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ModalControl = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission or validation logic
    // ...

    // Reset form fields
    // setName("");
    // setEmail("");
    // setPassword("");
    // setStatus("");
  };
  const cardData = [
    {
      image: "/image1.jpg",
      heading: "Introduction to Kirikeni",
      paragraph: "Learn basic pronunciations in the Kirikeni language.",
    },

    {
      image: "/image1.jpg",
      heading: "Introduction to Kirikeni",
      paragraph: "Learn basic pronunciations in the Kirikeni language.",
    },
    {
      image: "/image1.jpg",
      heading: "Introduction to Kirikeni",
      paragraph: "Learn basic pronunciations in the Kirikeni language.",
    },
    {
      image: "/image1.jpg",
      heading: "Introduction to Kirikeni",
      paragraph: "Learn basic pronunciations in the Kirikeni language.",
    },
    {
      image: "/image1.jpg",
      heading: "Introduction to Kirikeni",
      paragraph: "Learn basic pronunciations in the Kirikeni language.",
    },
    {
      image: "/image1.jpg",
      heading: "Introduction to Kirikeni",
      paragraph: "Learn basic pronunciations in the Kirikeni language.",
    },
  ];




  return (
    <>
      {
    isModalOpen ? (
      <Modal2 isOpen={isModalOpen}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Create Course</h2>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={ModalControl}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
            Course Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
              placeholder={"enter name..."}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
            Course Description
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

              placeholder={"enter email..."}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Upload  Course Image
            </label>
            <DragAndDropBox/>
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
            Number of Modules
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
              placeholder={"enter name..."}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
            Number of Levels Per Module
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
              placeholder={"enter name..."}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
            Number of Quizzes Per Level
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
              placeholder={"enter name..."}
            />
          </div>
        </form>


        <div className="flex justify-end w-full space-x-5">
          <button
            type="submit"
            className="bg-white text-[#005259] border border-[#005259] rounded mt-4  py-5 px-10"
            onClick={ModalControl}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#005259] text-white rounded mt-4  py-5 px-5"
          >
            Create Course
          </button>
        </div>
      </Modal2>
    ) : null
  }
    <Layout isActivePage="COURSES MANAGEMENT">
      <Header>
        <div className="bg-white flex justify-between w-full mt-3 h-[96px] items-center px-10 py-5 rounded">
          <div>
            <p className="text-[20px] font-bold">Course Management</p>
          </div>
          <button
            className="bg-[#005259] text-white py-4 px-5 h-[56px]"
            onClick={ModalControl}
          >
            <AddIcon /> Add Course
          </button>
        </div>
        {/* <div className='flex flex-grow mt-3 space-x-5'>
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
        
      </div> */}
      </Header>
      <div className="flex space-x-4 my-5 items-center">
          <Link href={"/main/coursemodule"}>
            <WestIcon style={{color:"#5141A4"}} />
          </Link>
          <div className=" my-1 bg-white py-2 px-4">
            <p>
              Courses Management{" "}
              <span className="text-[#5141A4]">/ Courses</span>
            </p>
          </div>
        </div>
      <p className="text-[16px] ">Courses</p>
      <div className="bg-white mt-5 overflow-scroll max-h-[500px] scrollbar scrollbar-thumb-gray-500 scrollbar-track rounded">
        <div className="p-5">
          <div className=" my-1 ">
            <input
              type="text"
              className="py-2 px-8 py-2 mx-[2px] pl-16 rounded-lg border border-gray-300 focus:ring focus:border-blue-500 focus:outline-none w-[500px]  bg-[#F3F4F5] bg-opacity-20 text-black"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 left-3 pr-3 flex items-center pointer-events-none">
              <SearchIcon
                className="mx-5 my-4 text-gray-400 "
                style={{ color: "#D0D3D8" }}
              />
            </div>
          </div>
          <div className="flex flex-wrap mx-0 my-4">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-8"
              >
                <CourseCard heading={card.heading} paragraph={card.paragraph} />
              </div>
            ))}

            <p className="text-[#5141A4] px-3">show more</p>
          </div>
        </div>
      </div>
    </Layout>
    </>
  );
}

export default CourseManagement;
