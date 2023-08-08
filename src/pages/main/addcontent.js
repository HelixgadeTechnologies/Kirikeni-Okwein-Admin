import React, { useState } from "react";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Modal2 from "@/components/Modal2";
import WestIcon from "@mui/icons-material/West";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";

function addcontent() {
  const [switchOpen, setSwitchOpen] = useState("one");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ModalControl = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // return(
  //   <></>
  // )

  return (
    <>
      {isModalOpen ? (
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
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
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
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
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
      ) : null}
      <Layout isActivePage="COURSES MANAGEMENT">
        <Header>
          <div className="bg-white flex justify-between w-full mt-3 h-[96px] items-center px-10 py-5 rounded">
            <div>
              <p className="text-[20px] font-bold">Course Management</p>
            </div>
            <div className="flex space-x-4">
              <button
                className="text-[#005259] bg-transparent border border-gray-300  py-4 px-5 h-[56px] rounded-[4px]"
                onClick={ModalControl}
              >
                Save Draft
              </button>
              <button
                className="bg-[#005259] text-white py-4 px-5 h-[56px] rounded-[4px]"
                onClick={ModalControl}
              >
                Submit Lesson
              </button>
            </div>
          </div>
        </Header>
        <div className="flex space-x-4 my-5 items-center">
          <Link href={"/main/courselevels"}>
            <WestIcon  style={{color:"#5141A4"}}/>
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
                <div className="flex items-center">
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
            <div className="w-2/3">
              <div className="shadow-md flex flex-col space-y-7 w-[94%] m-auto my-2 h-[239px] p-5 pt-7">
                <div>
                  <label>Question</label>
                  <input
                    type="text"
                    class="border-b p-2 border-gray-300 w-full"
                    placeholder="Tengo una reunión importante mañana."
                  />
                </div>
                <div>
                  <label>Requirement</label>
                  <input
                    type="text"
                    class="border border-gray-300 rounded p-2 w-full"
                    placeholder="Translate the following sentence from Spanish to English: ."
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-between w-[94%] m-auto my-2 space-x-8">
                <div className="w-full md:w-[47%] shadow-md h-[50px] flex justify-between items-center py-10 px-5">
                  <p>Add answer 1</p>
                  <div>
                    <label class="inline-flex items-center">
                      <input type="checkbox" class="hidden" />
                      <span class="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center mr-2">
                        <span class="bg-blue-500 rounded-full w-2 h-2"></span>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="w-full md:w-[47%]  shadow-md h-[50px] flex justify-between items-center py-10 px-5">
                  <p>Add answer 1</p>
                  <div>
                    <label class="inline-flex items-center">
                      <input type="checkbox" class="hidden" />
                      <span class="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center mr-2">
                        <span class="bg-blue-500 rounded-full w-2 h-2"></span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-between w-[94%] m-auto my-2 space-x-8">
                <div className="w-full md:w-[47%] shadow-md h-[50px] flex justify-between items-center py-10 px-5">
                  <p>Add answer 1</p>
                  <div>
                    <label class="inline-flex items-center">
                      <input type="checkbox" class="hidden" />
                      <span class="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center mr-2">
                        <span class="bg-blue-500 rounded-full w-2 h-2"></span>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="w-full md:w-[47%]  shadow-md h-[50px] flex justify-between items-center py-10 px-5">
                  <p>Add answer 1</p>
                  <div>
                    <label class="inline-flex items-center">
                      <input type="checkbox" class="hidden" />
                      <span class="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center mr-2">
                        <span class="bg-blue-500 rounded-full w-2 h-2"></span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex w-[94%] m-auto my-2 space-x-8">
                <button className="rounded-full border border-[#CBC6E4] flex space-x-2 justify-between px-3 mt-3 py-3 items-center text-[#7467B6]">
                  {/* <AddIcon className="bg-purple-700 bg-opacity-12 rounded-full"/> Add Answer */}
                  <div className="bg-[#7B61FF1F] bg-opacity-12 rounded-full w-8 h-8 flex items-center justify-center">
                      <AddIcon className="text-purple-500 w-4 h-4" /> 
                    </div>
                    Add Answer 
                </button>

              </div>
              <div className="flex w-[94%] justify-end items-end m-auto my-2 space-x-8">
                <button className="rounded border border-[#CBC6E4] flex space-x-2 justify-between px-3 mt-3 py-3 items-center text-[#7467B6]">

                    Previous 
                </button>
                <button className="rounded border border-[#CBC6E4] flex space-x-2 justify-between px-3 mt-3 py-3 items-center text-[#7467B6]">

                    Add Question 
                </button>

              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default addcontent;
