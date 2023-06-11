import CourseCard from "@/components/CourseCard";
import Layout from "@/components/layout";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Header from "@/components/Header";
import AddIcon from "@mui/icons-material/Add";
import Modal2 from "@/components/Modal2";
import DragAndDropBox from "@/components/DragAndDropBox";
import WestIcon from '@mui/icons-material/West';

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
      <Header Title={"User Management"} BtnText={"Add User"}>
        <div className="bg-white flex justify-between w-full mt-3 h-[96px] items-center px-10 py-5 rounded">
          <div>
            <p className="text-[20px] font-bold">Course Management</p>
          </div>
          <div className="flex space-x-4">
          <a
                className="text-[#005259] bg-transparent border border-gray-300  py-4 px-5 h-[56px]"
                onClick={ModalControl}
            >
                 Save Draft
            </a>
            <a
                className="bg-[#005259] text-white py-4 px-5 h-[56px]"
                onClick={ModalControl}
            >
                 Submit Lesson
            </a>

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
    
     <p className="text-[30px] pt-3">Greetings in Wakirike</p>
     <div className="flex items-center justify-between mb-6 w-full mt-4">
          <h2 className="text-[25px]">Content details</h2>
         
        </div>
        <form onSubmit={handleSubmit} className=" mx-auto text-left">
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
        </form>


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
