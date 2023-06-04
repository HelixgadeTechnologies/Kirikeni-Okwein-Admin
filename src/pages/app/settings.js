import Header from '@/components/Header'
import Layout from '@/components/layout'
import React, { useState } from 'react'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import profile from "@/assets/profile.png"
import Image from 'next/image'
function settings() {
  const [switchOpen, setSwitchOpen] = useState("one");

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form values: name, phone, email, password
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Layout isActivePage="ACCOUNT SETTINGS">
          <Header Title={"User Management"} BtnText={"Add User"}>
          <div className="bg-white flex justify-between w-full mt-3 h-[96px] items-center px-10 py-5 rounded">
            <div>
            <p className="text-[20px] font-bold">Setting</p>
            <div className="flex text-[#727A8B]">
              <p className={`pr-5 pt-5 pb-3 ${switchOpen=="one"?"text-[#5141A4] border-b border-[#5141A4]":"text-[#727A8B]"}`} onClick={()=>setSwitchOpen("one")}>Profile</p>
              <p className={`pr-5 pt-5 pb-3 ${switchOpen=="two"?"text-[#5141A4]  border-b border-[#5141A4]":"text-[#727A8B] "}`} onClick={()=>setSwitchOpen("two")}>Notification</p>
              <p className={`pr-5 pt-5 pb-3 ${switchOpen=="three"?"text-[#5141A4] border-b border-[#5141A4]":"text-[#727A8B]"}`} onClick={()=>setSwitchOpen("three")}>Payment</p>
              <p className={`pt-5 pb-3 ${switchOpen=="four"?"text-[#5141A4]  border-b border-[#5141A4]":"text-[#727A8B] "}`} onClick={()=>setSwitchOpen("four")}>Language</p>
            </div>

            </div>
            {/* {
              switchOpen=="one"? <a
              className="bg-[#005259] text-white py-4 px-5 h-[56px]"
              onClick={ModalControl}
            >
              <AddIcon /> Delete Admin
            </a>: <a
              className="bg-[#005259] text-white py-4 px-5 h-[56px]"
              onClick={ModalControl4}
            >
              <AddIcon /> Edit Admin
            </a>
            } */}
           
          </div>

        </Header>
        {switchOpen =="one"?
        <div className="bg-white mt-5 overflow-scroll overflow-x-auto max-h-[80vh] scrollbar scrollbar-thumb-gray-500 scrollbar-track w-[70vw]">
            <div className='flex flex-row '>
              <div className='w-[35%] px-5 border-r'>
                <div className='border-b flex flex-col space-y-5 py-5 '>
                  <h1 className='text-2xl font-bold'>My Profile</h1>
                  <p>Viverra lacus orci nisl, dis amet non ultricies senectus vulputate. Gravida </p>
                </div>
                <div className='px-1 flex flex-col space-y-5 py-5'>
                  <p>Two-factor authentication</p>
                  <div className='bg-[#F3F4F5] py-3 px-3 rounded flex justify-center items-center space-x-2'>
                    <LocalPhoneOutlinedIcon/>
                    <div>
                      <h3>Text message (SMS)</h3>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 rounded-full bg-gray-300">
                      <input
                        type="checkbox"
                        className="absolute top-0 left-0 w-6 h-6 rounded-full appearance-none cursor-pointer transition-transform duration-300 ease-in-out focus:outline-none"
                        style={{
                          transform: isChecked ? "translateX(100%)" : "translateX(0%)",
                        }}
                        defaultChecked={isChecked}
                        onChange={handleToggle}
                        onClick={handleToggle}
                      />
                      <div
                        className={`absolute top-0 left-0 w-6 h-6 rounded-full bg-white shadow transform transition-transform duration-300 ease-in-out ${
                          isChecked ? "translate-x-6" : ""
                        }`}
                        style={{ backgroundColor: "#7F56D9" }}
                      ></div>
                    </div>
                    {/* </div> */}

                  </div>
                </div>
              </div>
              <div className='w-[65%]'>
                <div className='flex justify-between item-center px-3'>
                  <div className=' flex flex-col space-y-5 py-5  w-[60%] '>
                      <h1 className='text-1xl font-bold'>Basic Information</h1>
                      <p>Update your details and verify </p>
                    </div>
                    <div className="flex justify-end mr-4 w-full space-x-5 w-[40%]">
                      <button
                        type="submit"
                        className="bg-white text-[#005259] border border-[#005259] rounded mt-4 h-[60px] w-[100px]  px-4"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-[#005259] text-white rounded mt-4  p-2 h-[60px] w-[180px]"
                        // onClick={ModalControl6}
                      >
                        Save changes
                      </button>
                    </div>

                </div>
                <div className='flex justify-start item-center px-3 pt-10'>
                  <div className=' flex flex-col space-y-5 py-5  w-[20%] '>
                      
                      <Image className="w-14 h-14 rounded-full" src={profile} alt="Profile" />
                    </div>
                    <div className="flex justify-start mr-4 w-full space-x-5 w-[80%]">
                    <button
                        type="submit"
                        className="bg-[#005259] text-white rounded mt-4  p-2 h-[60px] w-[180px]"
                        // onClick={ModalControl6}
                      >
                        Upload New Picture
                      </button>
                      <button
                        type="submit"
                        className="bg-white text-[#005259] border border-[#005259] rounded mt-4 h-[60px] w-[100px]  px-4"
                      >
                        Delete
                      </button>
                      
                    </div>

                </div>
                <div className=" mx-auto mt-2 p-2 rounded-md">
      <form onSubmit={handleSubmit}>
        <div className='flex space-x-4'>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-[270px] px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              className="w-[270px] px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

      </form>
    </div>
              </div>
            </div>
        </div>
        :switchOpen=="two"?
        <div className='flex justify-center'>
          <div className='bg-white w-[70%] h-[60vh] my-10' >
              <div className='flex justify-between border-b p-5'>
                <h3>Notifications</h3>
                <p>Turn on Notifications</p>
              </div>
          <div className='p-5 flex flex-col space-y-3'>
            <span className='font-bold'>Select Prefered medium</span>
              <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
            className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
          />
          <span className="text-gray-700">SMS</span>
        </label>
      </div>
      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
            className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
          />
          <span className="text-gray-700">EMAIL</span>
        </label>
      </div>
      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
            className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
          />
          <span className="text-gray-700">In-APP</span>
        </label>
      </div>
      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
            className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
          />
          <span className="text-gray-700">BROWSER</span>
        </label>
      </div>
          </div>
          </div>
        </div>
        :switchOpen=="three"?
        <div className='flex justify-center'>
          <div className='bg-white w-[70%] h-[60vh] my-10' >
              <div className='flex justify-between border-b p-5'>
                <h3>Payment</h3>
                {/* <p>Turn  on Notifications</p> */}
              </div>
          <div className='p-5 flex flex-col space-y-3'>
            <span className='font-bold'>Payment Gateway</span>
              <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
            className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
          />
          <span className="text-gray-700">STRIPE</span>
        </label>
      </div>
      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
            className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
          />
          <span className="text-gray-700">PAYPAL</span>
        </label>
      </div>
      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
            className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
          />
          <span className="text-gray-700">OTHERS</span>
        </label>
      </div>

          </div>
          <div className='p-5 flex flex-col space-y-3'>
            <span className='font-bold'>Payment Currency</span>
              <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
            className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
          />
          <span className="text-gray-700">USD</span>
        </label>
      </div>
      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
            className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
          />
          <span className="text-gray-700">GPB</span>
        </label>
      </div>
      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
            className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
          />
          <span className="text-gray-700">NGN</span>
        </label>
      </div>

          </div>
          </div>
        </div>
        :switchOpen=="four"?
        <div className='flex justify-center'>
          <div className='bg-white w-[70%] h-[60vh] my-10' >
              <div className='flex justify-between border-b p-5'>
                <h3>Language</h3>
                {/* <p>Turn on Notifications</p> */}
              </div>
          <div className='p-5 flex flex-col space-y-3'>
            <span className='font-bold'>Select Prefered Lanaguage</span>
              <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
            className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
          />
          <span className="text-gray-700">ENGLISH</span>
        </label>
      </div>

          </div>
          </div>
        </div>
        :""
        }
    </Layout>
  )
}

export default settings
