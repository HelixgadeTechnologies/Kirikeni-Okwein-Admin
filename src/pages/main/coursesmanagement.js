import CourseCard from "@/components/CourseCard";
import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Header from "@/components/Header";
import AddIcon from "@mui/icons-material/Add";
import Modal2 from "@/components/Modal2";
import DragAndDropBox from "@/components/DragAndDropBox";
import WestIcon from "@mui/icons-material/West";
import Link from "next/link";
import axios from "../../axios";

function CourseManagement() {
  const [switchOpen, setSwitchOpen] = useState("one");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [courseDetails, setCourseDetails] = useState({
    name:"",
    description:"",
    level: 0
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourseDetails((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const ModalControl = () => {
    setIsModalOpen(!isModalOpen);
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      // Code that uses localStorage
      let token = localStorage.getItem("token");
      axios({
        url:`/courses`,
        method:'post',
        data:{...courseDetails},
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res)=>{
        console.log(res)
        ModalControl()
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Code that uses localStorage
      let token = localStorage.getItem("token");
      axios({
        url: "/courses?sort=level",
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
          setCourses(res.data.doc);
          console.log(courses);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
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
      {isModalOpen ? (
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
                name="name"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                placeholder={"enter name"}
                onChange={handleChange}
                value={courseDetails.name}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Course Description
              </label>
              <input
                type="text"
                name="description"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                placeholder={"enter description"}
                onChange={handleChange}
                value={courseDetails.desctiption}
                required
              />
            </div>

            {/* <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium"
              >
                Upload Course Image
              </label>
              <DragAndDropBox />
            </div> */}

            {/* <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Number of Modules
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                placeholder={"enter name..."}
              />
            </div> */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium">
               Level
              </label>
              <input
                type="number"
                name="level"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                placeholder={"enter level..."}
                onChange={handleChange}
                value={courseDetails.level}
                required
              />
            </div>
            {/* <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Number of Quizzes Per Level
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                placeholder={"enter name..."}
              />
            </div> */}
            <div className="flex justify-end w-full space-x-5">
            <button
              type="button"
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
          </form>

          
        </Modal2>
      ) : null}
      <Layout isActivePage="COURSES MANAGEMENT">
        <Header>
          <div className="bg-white flex justify-between w-full mt-3 h-[96px] items-center px-10 py-5 rounded">
            <div>
              <p className="text-[20px] font-bold">Course Management</p>
            </div>
            <button
              className="bg-[#005259] text-white rounded-[4px] py-4 px-5 h-[56px]"
              onClick={ModalControl}
            >
              <AddIcon /> Add Course
            </button>
          </div>
        </Header>
        <div className="flex space-x-4 my-5 items-center">
          <Link href={"/main/coursesmanagement"}>
            <WestIcon style={{ color: "#5141A4" }} />
          </Link>
          <div className=" my-1 bg-white py-1 px-5 rounded">
            <p className="text-white">Courses Management </p>
          </div>
        </div>
        <p className="text-[16px] pt-3">Courses</p>
        <div className="bg-white mt-5 overflow-scroll max-h-[500px] scrollbar scrollbar-thumb-gray-500 scrollbar-track rounded">
          <div className="">
            <div className="">
              <table className="w-full">
                <thead className="bg-[#F9FAFB] text-[#727A8B] text-[13px] text-left">
                  <tr>
                    <th className="py-2 pl-5 pr-16 font-[300] mx-10">
                      COURSE NO
                    </th>
                    <th className="py-2 pl-5 pr-16 font-[300] mx-10">
                      COURSE TITLE
                    </th>
                    <th className="py-2 pl-5 pr-16 font-[300] mx-10">
                      COURSE DESCRIPTION
                    </th>
                    <th className="py-2 pl-5 font-[300] mx-10">ACTION</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {/* Table body rows */}
                  {courses.map((course, index) => (
                    <tr
                      key={index}
                      className={
                        "text-[#434D64] font-[300] text-[13px] border-b  "
                      }
                    >
                      <td className="py-2 pl-5 pr-20">Course {index + 1}</td>
                      <td className="py-2 pl-5 pr-20">
                        {course.name.slice(0, 25)}...
                      </td>
                      <td className="py-2 pl-5 pr-20">
                        {course.description.slice(0, 25)}...
                      </td>
                      <td className="py-2 pl-5 pr-10">
                        <Link
                          className="border border-[#D0D3D8] text-[#005259] bg-transparent py-[11px] px-5 rounded mr-2"
                          href={`/main/coursemodule?id=${course._id}`}
                        >
                          View
                        </Link>
                        <button className="border border-[#D0D3D8] text-[#005259] bg-transparent py-2 px-5 rounded mr-2">
                          Edit
                        </button>
                        <button className="border border-[#D0D3D8] text-[#005259] bg-transparent py-2 px-5 rounded">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}

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

export default CourseManagement;
