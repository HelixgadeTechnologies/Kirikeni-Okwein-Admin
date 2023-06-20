import Header from "@/components/Header";
import Layout from "@/components/Layout";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import BasicTable from "@/components/Table";
import Modal2 from "@/components/Modal2";

function Reports() {
  const [switchOpen, setSwitchOpen] = useState("closed");
  let data = [
    {
      title: "Course Progress Report",
      dateCreated: "12/12/22",
      status: "ACTIVE",
    },
  ];
  const [isModal6Open, setIsModal6Open] = useState(false);
  const [isModal5Open, setIsModal5Open] = useState(false);

  const ModalControl5 = () => {
    // setIsModal5Open(false);
    setIsModal6Open(!isModal5Open);
  };
  const ModalControl6 = () => {
    // setIsModal5Open(false);
    setIsModal6Open(!isModal6Open);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission or validation logic
    // ...

    // Reset form fields
    setName("");
    setEmail("");
    setPassword("");
    setStatus("");
  };
  return (
    <>
      {/* modal 1 [Add Report] */}
      {isModal6Open ? (
        <Modal2 isOpen={isModal6Open}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Generate Report</h2>
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={ModalControl6}
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
            <div className="flex">
                <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium">
                    Start Date
                </label>
                <input
                    type="date"
                    id="name"
                    className="border border-gray-300 rounded px-8 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={"enter name..."}
                />
                </div>

                <div className="mb-4 ml-5">
                <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium"
                >
                    End Date
                </label>
                <input
                    type="date"
                    id="email"
                    className="border border-gray-300 rounded px-8 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={"enter email..."}
                />
                </div>

            </div>



            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-gray-700 font-medium"
              >
                Users
              </label>
              <select
                id="status"
                className="border border-gray-300 rounded px-3 py-3 mt-1 w-full focus:outline-none focus:ring-blue-500"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">-- All Users -- </option>
                <option value="active">Admin</option>
                <option value="inactive">Manager</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-gray-700 font-medium"
              >
                Category
              </label>
              <select
                id="status"
                className="border border-gray-300 rounded px-3 py-3 mt-1 w-full focus:outline-none focus:ring-blue-500"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">-- Course Management -- </option>
                <option value="active">Admin</option>
                <option value="inactive">Manager</option>
              </select>
            </div>
          </form>
          <div className="text-left flex flex-col text-[#434D64] space-y-3">
            <h1 className="text-bold">Report options</h1>
            <table class="min-w-full bg-white my-3 text-left">
              <thead>
                <tr class="bg-[#F9FAFB]">
                  <th class="py-3 px-4">Check Box</th>
                  <th class="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                    {" "}
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox" />
                      <span class="ml-2 text-blue-500 text-lg"></span>
                    </label>
                  </td>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                  Generate Report
                  </td>
                </tr>
                <tr>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                    {" "}
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox" />
                      <span class="ml-2 text-blue-500 text-lg"></span>
                    </label>
                  </td>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                  Include Detailed Information
                  </td>
                </tr>
                <tr>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                    {" "}
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox" />
                      <span class="ml-2 text-blue-500 text-lg"></span>
                    </label>
                  </td>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                  Include Graphs and Charts
                  </td>
                </tr>
                <tr>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                    {" "}
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox" />
                      <span class="ml-2 text-blue-500 text-lg"></span>
                    </label>
                  </td>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                  Can view and manage settings
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>

          <div className="flex justify-end w-full space-x-5">
            <button
              type="submit"
              className="bg-white text-[#005259] border border-[#005259] rounded mt-4  py-5 px-10"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#005259] text-white rounded mt-4  py-5 px-5"
            >
              Save
            </button>
          </div>
        </Modal2>
      ) : null}
       {/* modal 1 [Add Report] */}
       {isModal6Open ? (
        <Modal2 isOpen={isModal5Open}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Edit Report</h2>
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={ModalControl5}
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
            <div className="flex">
                <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium">
                    Start Date
                </label>
                <input
                    type="date"
                    id="name"
                    className="border border-gray-300 rounded px-8 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={"enter name..."}
                />
                </div>

                <div className="mb-4 ml-5">
                <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium"
                >
                    End Date
                </label>
                <input
                    type="date"
                    id="email"
                    className="border border-gray-300 rounded px-8 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={"enter email..."}
                />
                </div>

            </div>



            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-gray-700 font-medium"
              >
                Users
              </label>
              <select
                id="status"
                className="border border-gray-300 rounded px-3 py-3 mt-1 w-full focus:outline-none focus:ring-blue-500"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">-- All Users -- </option>
                <option value="active">Admin</option>
                <option value="inactive">Manager</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-gray-700 font-medium"
              >
                Category
              </label>
              <select
                id="status"
                className="border border-gray-300 rounded px-3 py-3 mt-1 w-full focus:outline-none focus:ring-blue-500"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">-- Course Management -- </option>
                <option value="active">Admin</option>
                <option value="inactive">Manager</option>
              </select>
            </div>
          </form>
          <div className="text-left flex flex-col text-[#434D64] space-y-3">
            <h1 className="text-bold">Report options</h1>
            <table class="min-w-full bg-white my-3 text-left">
              <thead>
                <tr class="bg-[#F9FAFB]">
                  <th class="py-3 px-4">Check Box</th>
                  <th class="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                    {" "}
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox" />
                      <span class="ml-2 text-blue-500 text-lg"></span>
                    </label>
                  </td>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                  Generate Report
                  </td>
                </tr>
                <tr>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                    {" "}
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox" />
                      <span class="ml-2 text-blue-500 text-lg"></span>
                    </label>
                  </td>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                  Include Detailed Information
                  </td>
                </tr>
                <tr>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                    {" "}
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox" />
                      <span class="ml-2 text-blue-500 text-lg"></span>
                    </label>
                  </td>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                  Include Graphs and Charts
                  </td>
                </tr>
                <tr>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                    {" "}
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox" />
                      <span class="ml-2 text-blue-500 text-lg"></span>
                    </label>
                  </td>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                  Can view and manage settings
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>

          <div className="flex justify-end w-full space-x-5">
            <button
              type="submit"
              className="bg-white text-[#005259] border border-[#005259] rounded mt-4  py-5 px-10"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#005259] text-white rounded mt-4  py-5 px-5"
            >
              Save
            </button>
          </div>
        </Modal2>
      ) : null}
      <Layout isActivePage="REPORTS">
        <Header>
          <div className="bg-white flex justify-between w-full mt-3 h-[96px] items-center px-10 py-5 rounded">
            <div>
              <p className="text-[20px] font-bold">Reports</p>
            </div>
            <button className="bg-[#005259] text-white py-4 px-5 h-[56px]" onClick={ModalControl6}>
              <AddIcon /> Generate report
            </button>
          </div>
        </Header>
        {switchOpen == "open" ? (
          <div className="w-[900px]">
            <div className="bg-white p-5 mt-5 ">
              <h2 className="font-bold text2xl">Report Title</h2>
              <p>
                Viverra lacus orci nisl, dis amet non ultricies senectus
                vulputate. Gravida{" "}
              </p>
            </div>
            <div className="bg-white p-5 mt-5 ">
              <h2 className="font-bold text2xl">Report Overview</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel libero euismod, elementum turpis ut, hendrerit mauris.
                Vestibulum tempor nibh quis massa pretium commodo. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Donec vel libero
                euismod, elementum turpis ut, hendrerit mauris. Vestibulum
                tempor nibh quis massa pretium commodo.{" "}
              </p>
            </div>
            <div className="bg-white p-5 mt-5 py-[300px] ">
              <h2 className="font-bold text2xl">Report Overview</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel libero euismod, elementum turpis ut, hendrerit mauris.
                Vestibulum tempor nibh quis massa pretium commodo. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Donec vel libero
                euismod, elementum turpis ut, hendrerit mauris. Vestibulum
                tempor nibh quis massa pretium commodo.{" "}
              </p>
            </div>
          </div>
        ) : (
          <div className=" mt-5 p-5 overflow-scroll overflow-x-auto w-[900px] max-h-[600px] scrollbar scrollbar-thumb-gray-500 scrollbar-track w-[70vw]">
            <h2 className="font-bold py-4">Report List</h2>
            <table className="min-w-full bg-white text-[#434D64]">
              <thead className="bg-[#F9FAFB] text-[#727A8B]">
                <tr>
                  <th className="py-3 px-4 border-b-2 border-gray-300 text-left">
                    REPORT TITLE
                  </th>
                  <th className="py-3 px-4 border-b-2 border-gray-300 text-left">
                    DATE CREATED
                  </th>
                  <th className="py-3 px-4 border-b-2 border-gray-300 text-left">
                    STATUS
                  </th>
                  <th className="py-3 px-4 border-b-2 border-gray-300 text-left">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {[0, 1, 2, 3, 4, 5].map((row, index) => (
                  <tr key={index}>
                    <td className="py-4 px-4 border-b border-gray-300 text-left">
                      Course Progress Report
                    </td>
                    <td className="py-4 px-4 border-b border-gray-300 text-left">
                      12/12/22
                    </td>
                    <td className="py-4 px-4 border-b border-gray-300 text-left ">
                      <p className="border border-green text-center border-[#03D858] rounded text-[#03D858]">
                        Active
                      </p>
                    </td>
                    <td className="py-4 px-4 border-b border-gray-300 text-left">
                      <button className="border border-green text-center border-gray-400 px-5 py-0 text-gray-400 ml-2 rounded">
                        View
                      </button>
                      <button className="border border-green text-center border-gray-400 px-5 py-0 text-gray-400 ml-2 rounded" onClick={ModalControl5}>
                        Edit
                      </button>
                      <button className="border border-green text-center border-gray-400 px-5 py-0 text-gray-400 ml-2 rounded">
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Layout>
    </>
  );
}

export default Reports;
