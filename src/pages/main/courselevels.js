import CourseCard from "@/components/CourseCard";
import Layout from "@/components/Layout";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Header from "@/components/Header";
import AddIcon from "@mui/icons-material/Add";
import Modal2 from "@/components/Modal2";
import DragAndDropBox from "@/components/DragAndDropBox";
import WestIcon from '@mui/icons-material/West';
import Link from "next/link";

function CourseLevels() {
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
          <button
            className="bg-[#005259] text-white py-4 px-5 h-[56px] rounded-[4px]"
            onClick={ModalControl}
          >
            <AddIcon /> Add Level
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
              <span className="text-[#5141A4]"> / Course Level</span>
            </p>
          </div>
        </div>
     <p className="text-[16px] pt-3">Levels</p>
      <div className="bg-white mt-5 overflow-scroll max-h-[500px] scrollbar scrollbar-thumb-gray-500 scrollbar-track rounded">
        <div className="">
          <div className="">
      <table className=" w-full text-left">
        <thead className="bg-[#F9FAFB] text-[#727A8B] text-left">
          <tr>
            <th className="py-2 px-4">LEVEL NUMBER</th>
            <th className="py-2 px-4">LEVEL TITLE</th>
            <th className="py-2 px-4">LEVEL GOAL </th>
            <th className="py-2 px-4">ACTION</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {/* Table body rows */}
          {
            [1,2,3,4,5,6,7,8,9,10].map((num,index)=>(
                <tr key={index}>
                <td className="py-2 px-4">Level {index + 1}</td>
                <td className="py-2 px-4">Introduction</td>
                <td className="py-2 px-4">Lorem ipsum dolor sit amet</td>
                <td className="py-2 px-4">
                <Link className="border border-[#D0D3D8] text-[#005259] bg-transparent py-2 px-4 rounded mr-2" href='/main/addcontent'>
                    Add Content
                  </Link>

                  <button className="border border-[#D0D3D8] text-[#005259] bg-transparent py-2 px-4 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          }


          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
        </div>
      </div>
    </Layout>
    </>
  );
}

export default CourseLevels;
