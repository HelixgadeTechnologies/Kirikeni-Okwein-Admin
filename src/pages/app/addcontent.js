import Layout from "@/Components/Layout";
import React, { useState } from "react";
import Header from "@/Components/Header";
import Modal2 from "@/Components/Modal2";
import WestIcon from '@mui/icons-material/West';
import Link from "next/link";

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





  return (
    <>
      {
    isModalOpen ? (
      <Modal2 isOpen={isModalOpen}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Create Level</h2>
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
            Level Number
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
            Level Name
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

              placeholder={"enter email..."}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
            Level Goal 
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

              placeholder={"enter email..."}
            />
          </div>
        </form>


        <div className="flex justify-end w-full space-x-5">
          <button
            type="button"
            onClick={ModalControl}
            className="bg-white text-[#005259] border border-[#005259] rounded mt-4  py-5 px-10"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#005259] text-white rounded mt-4  py-5 px-5"
          >
            Create Level
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
          <div className="flex space-x-4">
          <button
                className="text-[#005259] bg-transparent border border-gray-300  py-4 px-5 h-[56px]"
                onClick={ModalControl}
            >
                 Save Draft
            </button>
            <button
                className="bg-[#005259] text-white py-4 px-5 h-[56px]"
                onClick={ModalControl}
            >
                 Submit Lesson
            </button>

          </div>
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
        <Link href="/app/course-module">
          <WestIcon />
        </Link>
        <div className=" my-1 bg-white py-2 px-4">
          <p>
            Support Portal{" "}
            <span className="text-[#5141A4]">/ Chat Messaging</span>
          </p>
        </div>
      </div>
      <div className="w-full h-[705px]  bg-white ">
        <div className="flex h-full">
          <div className="w-1/3 h-full border-r">
            <div className="p-5 h-full">
              {/* <h1 className="text-[20px] font-bold">Chats</h1> */}
              {/* <div className="flex jusify-between items-center space-x-4 pt-5 my-5">
                
              
              </div> */}
              <div className="flex items-center">
                {/* <div className=" my-1 relative">
                  <input
                    type="text"
                    className="py-2 px-8 py-2 mx-[2px] pl-16 rounded-lg border border-gray-300 focus:ring focus:border-blue-500 focus:outline-none w-full  bg-[#F3F4F5] bg-opacity-20 text-[#434D64]"
                    placeholder="Search"
                  />
                  <div className="absolute inset-y-0 left-3 pr-3 flex items-center pointer-events-none">
                    <SearchIcon
                      className="mx-5 my-4 text-gray-400 "
                      style={{ color: "#D0D3D8" }}
                    />
                  </div>
                </div> */}
                <form className="flex flex-col space-y-3">
                    <div className="w-full">
                      <label>Question Type</label>
                      <select className="border text-sm border-[#EEECF6]  text-[#434D64] py-3 px-4 w-full">
                        <option>Select</option>
                      </select>
                    </div>

                    <div className="w-full">
                      <label>Answer Type</label>
                      <select className="border text-sm border-[#EEECF6]  text-[#434D64] py-3 px-4 w-full">
                        <option>Select</option>
                      </select>
                    </div>

                    <div className="w-full">
                      <label>Question Number</label>
                      <select className="border text-sm border-[#EEECF6]  text-[#434D64] py-3 px-4 w-full">
                        <option>Select</option>
                      </select>
                    </div>
                </form>

              </div>

            </div>
          </div>

        </div>
      </div>
     {/* <p className="text-[30px] pt-3">Greetings in Wakirike</p>
     <div className="flex items-center justify-between mb-6 w-full mt-4">
          <h2 className="text-[25px]">Content details</h2>
         
        </div> */}
        {/* <form onSubmit={handleSubmit} className=" mx-auto text-left">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
            Course Title
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
              placeholder={"enter name..."}
            />
          </div>
        <div className="flex w-full space-x-4">
          <div className="mb-4 w-1/2">
            <label htmlFor="email" className="block text-gray-700 font-medium">
            Select Module
            </label>
            <select className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500">
                <option>-- Select Module --</option>
                <option>Module 1</option>
                <option>Module 2</option>
                <option>Module 3</option>
            </select>
          </div>
          <div className="mb-4 w-1/2">
            <label htmlFor="email" className="block text-gray-700 font-medium">
            Select Level
            </label>
            <select className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500">
                <option>-- Select Level --</option>
                <option>Level 1</option>
                <option>Level 2</option>
                <option>Level 3</option>
            </select>
          </div>
        </div>
        <div>
            <p className="text-[30px] py-5">Questions</p>
            <h2 className="text-2xl">Question 1</h2>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Requirement:
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"Translate the following sentence from Spanish to English: "}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Material:
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"Tengo una reunión importante mañana."}
                />
            </div>
            <div className="flex w-full space-x-4">
            <div className="mb-4 w-1/6">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 1
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/6">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 2
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/6">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 3
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/6">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 4
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/6">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Extra Word
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/6">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Extra Word
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Correct Answer:
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"I have an important meeting tomorrow"}
                />
            </div>
        </div>

        <div>
            <h2 className="text-2xl">Question 2</h2>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Requirement:
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"Translate the following sentence from Spanish to English: "}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Material:
                </label>
                <DragAndDropBox/>
                
            </div>
            <div className="flex w-full space-x-4">
            <div className="mb-4 w-1/6">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 1
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/6">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 2
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/6">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 3
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/6">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 4
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/6">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Extra Word
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/6">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Extra Word
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Correct Answer:
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"I have an important meeting tomorrow"}
                />
            </div>
        </div>
        <div>
            <h2 className="text-2xl">Question 3</h2>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Requirement:
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"Translate the following sentence from Spanish to English: "}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Material:
                </label>
                <DragAndDropBox/>
                
            </div>
            <div className="flex w-full space-x-4">
            <div className="mb-4 w-1/6">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 1
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/6">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 2
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/6">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 3
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/6">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 4
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/6">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Extra Word
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/6">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Extra Word
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Correct Answer:
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"I have an important meeting tomorrow"}
                />
            </div>
        </div>
        <div>
            <h2 className="text-2xl">Question 4</h2>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Requirement:
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"Match the Spanish words on the left with their corresponding English translations on the right "}
                />
            </div>

            <div className="flex w-full space-x-4">
            <div className="mb-4 w-1/2">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 1
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/2">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 1
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            </div>
            <div className="flex w-full space-x-4">
            <div className="mb-4 w-1/2">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 2
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/2">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 2
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            </div>
            <div className="flex w-full space-x-4">
            <div className="mb-4 w-1/2">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 3
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/2">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 3
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            </div>
            <div className="flex w-full space-x-4">
            <div className="mb-4 w-1/2">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 4
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/2">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 4
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Correct Answer:
                </label>
                <div className="flex w-full space-x-4">
            <div className="mb-4 w-1/2">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 1
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/2">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 1
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            </div>
            <div className="flex w-full space-x-4">
            <div className="mb-4 w-1/2">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 2
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/2">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 2
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            </div>
            <div className="flex w-full space-x-4">
            <div className="mb-4 w-1/2">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 3
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/2">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 3
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            </div>
            <div className="flex w-full space-x-4">
            <div className="mb-4 w-1/2">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 4
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            <div className="mb-4 w-1/2">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                Option 4
                </label>
                <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

                placeholder={"enter  text..."}
                />
            </div>
            </div>
            </div>
        </div>
        </form> */}


        {/* <div className="flex justify-end w-full space-x-5">
          <button
            type="button"
            onClick={ModalControl}
            className="bg-white text-[#005259] border border-[#005259] rounded mt-4  py-5 px-10"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#005259] text-white rounded mt-4  py-5 px-5"
          >
            Create Level
          </button>
        </div> */}
    </Layout>
    </>
  );
}

export default CourseManagement;
