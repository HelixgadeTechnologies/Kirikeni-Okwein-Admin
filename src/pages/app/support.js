import Header from '@/Components/Header'
import Layout from '@/Components/Layout'
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from 'react'

function Support() {
    const [switchOpen, setSwitchOpen] = useState("one");
    const users = [
        {
          id: 1,
          username: "John Doe",
          email: "john.doe@example.com",
          dateRegistered: "2022/01/01",
          leaderboardNumber: 5,
          status: true,
          ticket:'00001',
          subject:"this is the subject",
          status:"CLOSED",
          priority:"High"
        },
      ];
      const admins = [
        {
          id: 1,
          username: "John Doe",
          email: "john.doe@example.com",
          dateRegistered: "2022/01/01",
          status: true,
          role:"Admin"
        },
        {
          id: 2,
          username: "Jane Smith",
          email: "jane.smith@example.com",
          dateRegistered: "2022/02/01",
          status: false,
          role:"Manager"
        },
    
      ];
  return (
    <Layout>
      <Header>
          <div className="bg-white flex justify-between w-full mt-3 h-[96px] items-center px-10 py-5 rounded">
            <div>
            <p className="text-[20px] font-bold">Support</p>
            <div className="flex space-x-5 text-[#727A8B]">
              <p className={`pt-5 pb-3 ${switchOpen=="one"?"text-[#5141A4] border-b border-[#5141A4]":"text-[#727A8B]"}`} onClick={()=>setSwitchOpen("one")}>Ticket Management</p>
              <p className={`pt-5 pb-3 ${switchOpen=="two"?"text-[#5141A4]  border-b border-[#5141A4]":"text-[#727A8B] "}`} onClick={()=>setSwitchOpen("two")}>Knowledge base</p>
              <p className={`pt-5 pb-3 ${switchOpen=="two"?"text-[#5141A4]  border-b border-[#5141A4]":"text-[#727A8B] "}`} onClick={()=>setSwitchOpen("three")}>Live chat</p>
            </div>

            </div>
            {
              switchOpen=="one"? <button
              className="bg-[#005259] text-white py-4 px-5 h-[56px]"
            >
              <AddIcon /> Delete Admin
            </button>: <button
              className="bg-[#005259] text-white py-4 px-5 h-[56px]"
            //   onClick={ModalControl4}
            >
              <AddIcon /> Edit Admin
            </button>
            }
           
          </div>
          <div className='flex flex-grow mt-3 space-x-5'>
        <div className='bg-white px-5 py-3 rounded w-full'>
            <p className='text-[#727A8B] text-[14px]'>OPEN TICKETS</p>
            <b className='text-[28px]'>100</b>
        </div>
         <div className='bg-white px-5 py-3 rounded w-full'>
            <p className='text-[#727A8B] text-[14px]'>AVERAGE RESPONSE TIME</p>
            <b className='text-[28px]'>2 hours</b>
        </div>
        <div className='bg-white px-5 py-3 rounded w-full'>
            <p className='text-[#727A8B] text-[14px]'>CUSTOMER SATISFACTION RATINGS</p>
            <b className='text-[28px]'>75%</b>
        </div>

      </div>
        </Header>
        <div className="bg-white mt-5 overflow-scroll overflow-x-auto w-fit max-h-[400px] scrollbar scrollbar-thumb-gray-500 scrollbar-track w-[70vw]">
          {
            switchOpen==="one"?
            <table className="min-w-fit divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ticket ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Username
          </th> */}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ASSIGNEE
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                STATUS
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                PRIORITY
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                DATE OPENED
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
                    <div className="text-sm text-gray-900">{user.ticket}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.subject}</div>
                  </td>
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
                  <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{user.status}</div>
            </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.priority}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {user.dateRegistered}
                    </div>
                  </td>
                  {/* <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {user.leaderboardNumber}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                      {user.dateRegistered}
                    </div>
                  </td> */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      className="text-blue-600 hover:text-blue-900"
                    //   onClick={ModalControl2}
                    >
                      View 
                    </button>
                   
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          : switchOpen ==="two"? <table className="w-fit divide-y divide-gray-200 ">
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
              <th >
                <p className="invisible">.............</p></th>
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
                  <div className="text-sm text-gray-900">
                    {user.role}
                  </div>
                </td>


                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    className="text-blue-600 hover:text-blue-900"
                    // onClick={ModalControl5}
                  >
                    View Admin
                  </button>
                  <button className="ml-2 text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>:null
          }
         
        </div>
        
    </Layout>
  )
}

export default Support
