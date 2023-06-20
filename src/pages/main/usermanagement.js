import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Modal2 from "@/components/Modal2";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function UserManagement() {
  const users = [
    {
      id: 1,
      username: "John Doe",
      email: "john.doe@example.com",
      dateRegistered: "2022/01/01",
      leaderboardNumber: 5,
      status: true,
    },
    {
      id: 2,
      username: "Jane Smith",
      email: "jane.smith@example.com",
      dateRegistered: "2022/02/01",
      leaderboardNumber: 2,
      status: false,
    },
    {
      id: 1,
      username: "John Doe",
      email: "john.doe@example.com",
      dateRegistered: "2022/01/01",
      leaderboardNumber: 5,
      status: true,
    },
    {
      id: 2,
      username: "Jane Smith",
      email: "jane.smith@example.com",
      dateRegistered: "2022/02/01",
      leaderboardNumber: 2,
      status: false,
    },
    {
      id: 1,
      username: "John Doe",
      email: "john.doe@example.com",
      dateRegistered: "2022/01/01",
      leaderboardNumber: 5,
      status: true,
    },
    {
      id: 2,
      username: "Jane Smith",
      email: "jane.smith@example.com",
      dateRegistered: "2022/02/01",
      leaderboardNumber: 2,
      status: false,
    },
  ];

  const admins = [
    {
      id: 1,
      username: "John Doe",
      email: "john.doe@example.com",
      dateRegistered: "2022/01/01",
      status: true,
      role: "Admin",
    },
    {
      id: 2,
      username: "Jane Smith",
      email: "jane.smith@example.com",
      dateRegistered: "2022/02/01",
      status: false,
      role: "Manager",
    },
  ];

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  const [isModal4Open, setIsModal4Open] = useState(false);
  const [isModal5Open, setIsModal5Open] = useState(false);
  const [isModal6Open, setIsModal6Open] = useState(false);
  const [switchOpen, setSwitchOpen] = useState("one");

  const ModalControl = () => {
    setIsModalOpen(!isModalOpen);
  };
  const ModalControl2 = () => {
    setIsModal2Open(!isModal2Open);
  };
  const ModalControl3 = () => {
    setIsModal2Open(false);
    setIsModal3Open(!isModal3Open);
  };
  const ModalControl4 = () => {
    setIsModal4Open(false);
    setIsModal4Open(!isModal4Open);
  };
  const ModalControl5 = () => {
    setIsModal5Open(false);
    setIsModal5Open(!isModal5Open);
  };
  const ModalControl6 = () => {
    setIsModal5Open(false);
    setIsModal6Open(!isModal6Open);
  };

  return (
    <>
      {/* modal 1 [add user] */}
      {isModalOpen ? (
        <Modal2 isOpen={isModalOpen}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Edit New User</h2>
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
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={"enter name..."}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"enter email..."}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                value={password}
                placeholder={"enter password..."}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-gray-700 font-medium"
              >
                Status
              </label>
              <select
                id="status"
                className="border border-gray-300 rounded px-3 py-3 mt-1 w-full focus:outline-none focus:ring-blue-500"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Select status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
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
                Create User
              </button>
            </div>
          </form>

          {/* {children} */}
        </Modal2>
      ) : null}

      {/* modal 2 [edit user] */}
      {isModal2Open ? (
        <Modal2 isOpen={isModal2Open}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">User Details</h2>
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={ModalControl2}
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
          <div className="text-left flex flex-col text-[#434D64] space-y-3">
            <h1>Personal Information</h1>
            <div>
              <div>
                <b className="font-semibold text-[14px]">Name</b>
                <br />
                <p className="text-[14px]">James Hadish</p>
              </div>
            </div>
            <div>
              <div>
                <b className="font-semibold text-[14px]">Email</b>
                <br />
                <p className="text-[14px]">Peaceewor@gmail.com</p>
              </div>
            </div>
            <div>
              <div>
                <b className="font-semibold text-[14px]">Phone number</b>
                <br />
                <p className="text-[14px]">08123456778</p>
              </div>
            </div>
            <div>
              <div>
                <b className="font-semibold text-[14px]">Username</b>
                <br />
                <p className="text-[14px]">peace_learns10</p>
              </div>
            </div>
          </div>
          <table class="min-w-full bg-white my-3 text-left">
            <thead>
              <tr class="bg-[#F9FAFB]">
                <th class="py-3 px-4">Course</th>
                <th class="py-3 px-4">Progress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-3 px-4 border-b-2 border-gray-200">Course 1</td>
                <td class="py-3 px-4 border-b-2 border-gray-200">75%</td>
              </tr>
              <tr>
                <td class="py-3 px-4 border-b-2 border-gray-200">Course 2</td>
                <td class="py-3 px-4 border-b-2 border-gray-200">50%</td>
              </tr>
              <tr>
                <td class="py-3 px-4 border-b-2 border-gray-200">Course 3</td>
                <td class="py-3 px-4 border-b-2 border-gray-200">90%</td>
              </tr>
            </tbody>
          </table>

          <div className="text-left flex flex-col text-[#434D64] space-y-3">
            <h1>Donation</h1>
            <div>
              <div>
                <b className="font-semibold text-[14px]">Payment ID</b>
                <br />
                <p className="text-[14px]">11233</p>
              </div>
            </div>
            <div>
              <div>
                <b className="font-semibold text-[14px]">Date</b>
                <br />
                <p className="text-[14px]">12/3/23</p>
              </div>
            </div>
            <div>
              <div>
                <b className="font-semibold text-[14px]">Amount</b>
                <br />
                <p className="text-[14px]">$100</p>
              </div>
            </div>
            <div>
              <div>
                <b className="font-semibold text-[14px]">Payment Method</b>
                <br />
                <p className="text-[14px]">Credit card</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full space-x-5">
            <button
              type="submit"
              className="bg-white text-[#005259] border border-[#005259] rounded mt-4  py-5 px-10"
            >
              Delete
            </button>
            <button
              type="submit"
              className="bg-[#005259] text-white rounded mt-4  py-5 px-5"
              onClick={ModalControl3}
            >
              Edit User
            </button>
          </div>

          {/* {children} */}
        </Modal2>
      ) : null}

      {/* modal 3 [add user] */}
      {isModal3Open ? (
        <Modal2 isOpen={isModal3Open}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Edit User Information</h2>
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={ModalControl3}
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
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={"enter name..."}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"enter email..."}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                value={password}
                placeholder={"enter password..."}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-gray-700 font-medium"
              >
                Status
              </label>
              <select
                id="status"
                className="border border-gray-300 rounded px-3 py-3 mt-1 w-full focus:outline-none focus:ring-blue-500"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Select status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
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
                Edit User
              </button>
            </div>
          </form>
        </Modal2>
      ) : null}

      {/* modal 4 [add admin] */}
      {isModal4Open ? (
        <Modal2 isOpen={isModal4Open}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Add new Sub Admin</h2>
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={ModalControl4}
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
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={"enter name..."}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"enter email..."}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                value={password}
                placeholder={"enter password..."}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-gray-700 font-medium"
              >
                Role
              </label>
              <select
                id="status"
                className="border border-gray-300 rounded px-3 py-3 mt-1 w-full focus:outline-none focus:ring-blue-500"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Select role</option>
                <option value="active">Admin</option>
                <option value="inactive">Manager</option>
              </select>
            </div>
          </form>
          <div className="text-left flex flex-col text-[#434D64] space-y-3">
            <h1 className="text-bold">Role and Permissions</h1>
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
                    Can create and edit courses
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
                    Can view and manage users
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
                    Can view and manage sub admins
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
                <tr>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                    {" "}
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox" />
                      <span class="ml-2 text-blue-500 text-lg"></span>
                    </label>
                  </td>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                    Can view and manage reports
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
              Create Sub Admin
            </button>
          </div>
        </Modal2>
      ) : null}

      {/* modal 5 [view Admin ] */}
      {isModal5Open ? (
        <Modal2 isOpen={isModal5Open}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold"> Admin Details</h2>
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
          <div className="text-left flex flex-col text-[#434D64] space-y-3">
            <h1>Personal Information</h1>
            <div>
              <div>
                <b className="font-semibold text-[14px]">Name</b>
                <br />
                <p className="text-[14px]">James Hadish</p>
              </div>
            </div>
            <div>
              <div>
                <b className="font-semibold text-[14px]">Email</b>
                <br />
                <p className="text-[14px]">Peaceewor@gmail.com</p>
              </div>
            </div>
            <div>
              <div>
                <b className="font-semibold text-[14px]">Phone number</b>
                <br />
                <p className="text-[14px]">08123456778</p>
              </div>
            </div>
            <div>
              <div>
                <b className="font-semibold text-[14px]">Username</b>
                <br />
                <p className="text-[14px]">peace_learns10</p>
              </div>
            </div>
          </div>
          <div className="text-left flex flex-col text-[#434D64] space-y-3">
            {/* <h1 className="text-bold">Role and Permissions</h1> */}
            <table class="min-w-full bg-white my-3 text-left">
              <thead>
                <tr class="bg-[#F9FAFB]">
                  {/* <th class="py-3 px-4">Check Box</th> */}
                  <th class="py-3 px-4">Roles</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                    Can create and edit courses
                  </td>
                </tr>
                <tr>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                    Can view and manage users
                  </td>
                </tr>
                <tr>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                    Can view and manage sub admins
                  </td>
                </tr>
                <tr>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                    Can view and manage settings
                  </td>
                </tr>
                <tr>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                    Can view and manage reports
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
              Delete Admin
            </button>
            <button
              type="submit"
              className="bg-[#005259] text-white rounded mt-4  py-5 px-5"
              onClick={ModalControl6}
            >
              Edit Admin
            </button>
          </div>
        </Modal2>
      ) : null}

      {/* modal 6 [add user] */}
      {isModal6Open ? (
        <Modal2 isOpen={isModal6Open}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Edit new Sub Admin</h2>
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
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={"enter name..."}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"enter email..."}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
                value={password}
                placeholder={"enter password..."}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-gray-700 font-medium"
              >
                Role
              </label>
              <select
                id="status"
                className="border border-gray-300 rounded px-3 py-3 mt-1 w-full focus:outline-none focus:ring-blue-500"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Select role</option>
                <option value="active">Admin</option>
                <option value="inactive">Manager</option>
              </select>
            </div>
          </form>
          <div className="text-left flex flex-col text-[#434D64] space-y-3">
            <h1 className="text-bold">Role and Permissions</h1>
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
                    Can create and edit courses
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
                    Can view and manage users
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
                    Can view and manage sub admins
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
                <tr>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                    {" "}
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox" />
                      <span class="ml-2 text-blue-500 text-lg"></span>
                    </label>
                  </td>
                  <td class="py-3 px-4 border-b-2 border-gray-200">
                    Can view and manage reports
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

      <Layout isActivePage="USER MANAGEMENT">
        <Header >
          <div className="bg-white flex justify-between w-full mt-3 h-[96px] items-center px-10 py-5 rounded">
            <div>
              <p className="text-[20px] font-bold">Dashboard</p>
              <div className="flex text-[#727A8B]">
                <p
                  className={`pr-5 pt-5 pb-3 ${
                    switchOpen == "one"
                      ? "text-[#5141A4] border-b border-[#5141A4]"
                      : "text-[#727A8B]"
                  }`}
                  onClick={() => setSwitchOpen("one")}
                >
                  User List
                </p>
                <p
                  className={`pt-5 pb-3 ${
                    switchOpen == "two"
                      ? "text-[#5141A4]  border-b border-[#5141A4]"
                      : "text-[#727A8B] "
                  }`}
                  onClick={() => setSwitchOpen("two")}
                >
                  Sub Admin List
                </p>
              </div>
            </div>
            {switchOpen !== "one" ? (
              <button
                className="bg-[#005259] text-white py-4 px-5 h-[56px]"
                onClick={ModalControl}
              >
                <AddIcon /> Add Sub Admin
              </button>
            ) : (
              <button
                className="bg-[#005259] text-white py-4 px-5 h-[56px]"
                onClick={ModalControl4}
              >
                <AddIcon /> Add User
              </button>
            )}
          </div>
          <div className="flex flex-grow mt-3 space-x-5">
            <div className="bg-white px-5 py-3 rounded w-full">
              <p className="text-[#727A8B]">Total Courses</p>
              <b className="text-[28px]">25</b>
            </div>
            <div className="bg-white px-5 py-3 rounded w-full">
              <p className="text-[#727A8B]">Average Learning time</p>
              <b className="text-[28px]">125 hours</b>
            </div>
            <div className="bg-white px-5 py-3 rounded w-full">
              <p className="text-[#727A8B]">Completion rate</p>
              <b className="text-[28px]">75%</b>
            </div>
            <div className="bg-white px-5 py-3 rounded w-full">
              <p className="text-[#727A8B]">Average Performance</p>
              <b className="text-[28px]">72%</b>
            </div>
          </div>
        </Header>

        <div className="bg-white mt-5 overflow-scroll overflow-x-auto w-fit max-h-[400px] scrollbar scrollbar-thumb-gray-500 scrollbar-track w-[70vw]">
          {switchOpen === "one" ? (
            <table className="min-w-fit divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Username
          </th> */}
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Registered
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Leaderboard
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full flex">
                          <div className="rounded-full bg-blue-500 h-10 w-10 text-white flex items-center justify-center">
                            <span className="text-lg font-semibold">
                              {user.username.charAt(0)}
                            </span>
                            <span className="text-lg font-semibold">
                              {user.username.charAt(user.username.length - 1)}
                            </span>
                          </div>
                        </div>
                        <p className="pl-2">{user.username}</p>
                      </div>
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{user.username}</div>
            </td> */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {user.dateRegistered}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {user.leaderboardNumber}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded ${
                          user.status
                            ? "border py-1 px-1 border-green-100 text-green-800"
                            : "border py-1 px-1 border-red-100 text-red-800"
                        }`}
                      >
                        {user.status ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        className="border py-1 px-1 border-gray-300 rounded text-blue-600 hover:text-blue-900"
                        onClick={ModalControl2}
                      >
                        View User
                      </button>
                      <button className="border py-1 px-1 border-gray-300 rounded ml-2 text-red-600 hover:text-red-900">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : switchOpen === "two" ? (
            <table className="w-fit divide-y divide-gray-200 ">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Username
        </th> */}
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Registered
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>

                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                  <th>
                    <p className="invisible">.............</p>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {admins.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full flex">
                          <div className="rounded-full bg-blue-500 h-10 w-10 text-white flex items-center justify-center">
                            <span className="text-lg font-semibold">
                              {user.username.charAt(0)}
                            </span>
                            <span className="text-lg font-semibold">
                              {user.username.charAt(user.username.length - 1)}
                            </span>
                          </div>
                        </div>
                        <p className="pl-2">{user.username}</p>
                      </div>
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{user.username}</div>
          </td> */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {user.dateRegistered}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.role}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        className="border py-1 px-1 border-gray-300 rounded text-blue-600 hover:text-blue-900"
                        onClick={ModalControl5}
                      >
                        View Admin
                      </button>
                      <button className="border py-1 px-1 border-gray-300 rounded ml-2 text-red-600 hover:text-red-900">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </div>
      </Layout>
    </>
  );
}

export default UserManagement;
