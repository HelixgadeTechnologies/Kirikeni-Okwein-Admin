import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import AddIcon from "@mui/icons-material/Add";
import Modal2 from "@/components/Modal2";
import WestIcon from "@mui/icons-material/West";
import Link from "next/link";
import axios from "../../axios";

function CourseModule() {
  const [switchOpen, setSwitchOpen] = useState("one");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [modules, setModules] = useState([]);
  const [editId, setEditId] = useState('');
  const [moduleDetails, setModulesDetails] = useState({
    name: "",
    description: "",
    level:1
  });
  const ModalControl = () => {
    setIsModalOpen(!isModalOpen);
  };
  const ModalControl1 = (id) => {
    setIsModalOpen1(!isModalOpen1);
    setEditId(id)
    if (typeof window !== "undefined") {
      // Code that uses localStorage
      let token = localStorage.getItem("token");

      
      axios({
        url: `/modules/${id}`,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
          setModulesDetails({
            description:res.data.doc.description,
            name:res.data.doc.name,
            level:res.data.doc.level,
          })
          // ModalControl();
          // window.location.reload()
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      // Code that uses localStorage
      let token = localStorage.getItem("token");

      const params = new URLSearchParams(location.search);
      let id = params.get("id");
      axios({
        url: `/modules`,
        method: "post",
        data: { ...moduleDetails, course: id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
          ModalControl();
          window.location.reload()
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleSubmit1 = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      // Code that uses localStorage
      let token = localStorage.getItem("token");

      let id = editId
      axios({
        url: `/modules/${id}`,
        method: "patch",
        data: { ...moduleDetails },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
          // ModalControl();
          // window.location.reload()
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Code that uses localStorage
      let token = localStorage.getItem("token");

      const params = new URLSearchParams(location.search);
      let id = params.get("id");
      axios({
        url: `/modules?course=${id}`,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
          setModules(res.data.doc);
          // console.log(courses);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setModulesDetails((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  function deleteModule(id) {
    if (typeof window !== "undefined") {
      // Code that uses localStorage
      let token = localStorage.getItem("token");
      axios({
        url: `/modules/${id}`,
        method: "delete",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
          window.location.reload()
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <>
      {isModalOpen ? (
        <Modal2 isOpen={isModalOpen}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Create Module</h2>
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
                Module Name
              </label>
              <input
                type="text"
                name="name"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                placeholder={"enter name..."}
                onChange={handleChange}
                value={moduleDetails.name}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Module Description
              </label>
              <input
                type="text"
                name="description"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                placeholder={"enter description..."}
                onChange={handleChange}
                value={moduleDetails.description}
                required
              />
            </div>
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
                value={moduleDetails.level}
                required
              />
            </div>

            {/* <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
            Module Description
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

              placeholder={"enter email..."}
            />
          </div> */}
            <div className="flex justify-end w-full space-x-5">
              <button
                type="button"
                className="bg-white text-[#005259] border border-[#005259] rounded mt-4  py-5 px-10"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#005259] text-white rounded mt-4  py-5 px-5"
              >
                Create Module
              </button>
            </div>
          </form>
        </Modal2>
      ) : null}
      {isModalOpen1 ? (
        <Modal2 isOpen={isModalOpen1}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Edit Module</h2>
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={ModalControl1}
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
          <form onSubmit={handleSubmit1} className="max-w-md mx-auto text-left">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Module Name
              </label>
              <input
                type="text"
                name="name"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                placeholder={"enter name..."}
                onChange={handleChange}
                value={moduleDetails.name}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Module Description
              </label>
              <input
                type="text"
                name="description"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                placeholder={"enter description..."}
                onChange={handleChange}
                value={moduleDetails.description}
                required
              />
            </div>
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
                value={moduleDetails.level}
                required
              />
            </div>

            {/* <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
            Module Description
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"

              placeholder={"enter email..."}
            />
          </div> */}
            <div className="flex justify-end w-full space-x-5">
              <button
                type="button"
                className="bg-white text-[#005259] border border-[#005259] rounded mt-4  py-5 px-10"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#005259] text-white rounded mt-4  py-5 px-5"
              >
                Update Module
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
              className="bg-[#005259] text-white py-4 px-5 h-[56px] rounded-[4px]"
              onClick={ModalControl}
            >
              <AddIcon /> Add Module
            </button>
          </div>

        </Header>
        <div className="flex space-x-4 my-5 items-center">
          <Link href={"/main/coursesmanagement"}>
            <WestIcon style={{ color: "#5141A4" }} />
          </Link>
          <div className=" my-1 bg-white py-2 px-4">
            <p>
              Courses Management{" "}
              <span className="text-[#5141A4]"> / Course Modules</span>
            </p>
          </div>
        </div>
        <p className="text-[16px] pt-3">Modules</p>
        <div className="bg-white mt-5 overflow-scroll max-h-[500px] scrollbar scrollbar-thumb-gray-500 scrollbar-track rounded">
          <div className="">
            <div className="">
              <table className="w-full">
                <thead className="bg-[#F9FAFB] text-[#727A8B] text-[13px] text-left">
                  <tr>
                    <th className="py-2 pl-5 pr-14 font-[300]">
                      MODULE NUMBER
                    </th>
                    <th className="py-2 pl-5 pr-14 font-[300]">MODULE TITLE</th>
                    <th className="py-2 pl-5 pr-14 font-[300]">
                      MODULE DESCRIPTION
                    </th>
                    <th className="py-2 pl-5 font-[300] ">ACTION</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {modules.map((cmodule, index) => (
                    <tr
                      key={index}
                      className={
                        "text-[#434D64] font-[300] text-[13px] border-b"
                      }
                    >
                      <td className="py-2 pl-5 pr-16">Module {index + 1}</td>
                      <td className="py-2 pl-5 pr-16">
                        {cmodule.moduleDetails.name}
                      </td>
                      <td className="py-2 pl-5 pr-16">
                        {cmodule.moduleDetails.description}
                      </td>
                      <td className="py-2 pl-5 ">
                        <Link
                          className="border border-[#D0D3D8] text-[#005259] bg-transparent py-2 px-4 rounded mr-2"
                          href={`/main/courselevels?id=${cmodule.moduleDetails._id}`}
                        >
                          View
                        </Link>
                        <button className="border border-[#D0D3D8] text-[#005259] bg-transparent py-2 px-4 rounded mr-2" onClick={() => ModalControl1(cmodule.moduleDetails._id)}>
                          Edit
                        </button>
                        <button type="button" className="border border-[#D0D3D8] text-[#005259] bg-transparent py-2 px-4 rounded" onClick={()=> deleteModule(cmodule.moduleDetails._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default CourseModule;
