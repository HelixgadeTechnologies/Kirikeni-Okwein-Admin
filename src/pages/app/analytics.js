import Header from '@/components/Header'
import Layout from '@/components/layout'
import React, { useState } from 'react'

function Analytics() {
  const [switchOpen, setSwitchOpen] = useState("one");

  return (
    <Layout isActivePage="ANALYTICS">
       <Header Title={"User Management"} BtnText={"Add User"}>
          <div className="bg-white flex justify-between w-full mt-3 h-[96px] items-center px-10 py-5 rounded">
            <div>
            <p className="text-[20px] font-bold">Dashboard</p>
            <div className="flex text-[#727A8B]">
              <p className={`pr-5 pt-5 pb-3 ${switchOpen=="one"?"text-[#5141A4] border-b border-[#5141A4]":"text-[#727A8B]"}`} onClick={()=>setSwitchOpen("one")}>User Analytics</p>
              <p className={`pt-5 pb-3 ${switchOpen=="two"?"text-[#5141A4]  border-b border-[#5141A4]":"text-[#727A8B] "}`} onClick={()=>setSwitchOpen("two")}>Course Analytics</p>
            </div>

            </div>
            {
              switchOpen=="one"? <a
              className="bg-[#005259] text-white py-4 px-5 h-[56px]"
              // onClick={ModalControl}
            >
               View Users
            </a>: <a
              className="bg-[#005259] text-white py-4 px-5 h-[56px]"
              // onClick={ModalControl4}
            >
              Add User
            </a>
            }
           
          </div>
          <div className='flex flex-grow mt-3 space-x-3'>
        <div className='bg-white px-3 py-3 rounded w-full'>
            <p className='text-[#727A8B]'>Number Of login</p>
            <b className='text-[25px]'>25</b>
        </div>
         <div className='bg-white px-3 py-3 rounded w-full'>
            <p className='text-[#727A8B]'>Average time per session</p>
            <b className='text-[25px]'>125 hours</b>
        </div>
        <div className='bg-white px-3 py-3 rounded w-full'>
            <p className='text-[#727A8B]'>Completion rate</p>
            <b className='text-[25px]'>75%</b>
        </div>
        <div className='bg-white px-3 py-3 rounded w-full'>
            <p className='text-[#727A8B]'>Average Course Rating</p>
            <b className='text-[25px]'>72%</b>
        </div>
        <div className='bg-white px-3 py-3 rounded w-full'>
            <p className='text-[#727A8B]'>Average Performance</p>
            <b className='text-[25px]'>72%</b>
        </div>
        
      </div>
        </Header>
        {
          switchOpen=="one"?
          <div className=' mt-5 flex overflow-scroll overflow-x-auto w-fit max-h-[4000px] scrollbar scrollbar-thumb-gray-500 scrollbar-track'>
          <div className=' w-full h-[316px] mt-5 flex '>
            <div className='bg-white w-[70%] h-full'>

            </div>
            <div className='bg-white w-[28%] h-full ml-[20px]'>

            </div>

          </div>
          <div className='bg-white w-full w-[900px] h-[316px] mt-5'>

          </div>
          </div>
          :switchOpen=="two"?
          <div className=' mt-5 flex overflow-scroll overflow-x-auto w-fit max-h-[4000px] scrollbar scrollbar-thumb-gray-500 scrollbar-track'>
          <div className=' w-full h-[316px] mt-5 flex '>
            <div className='bg-white w-[70%] h-full'>

            </div>
            <div className='bg-white w-[28%] h-full ml-[20px]'>

            </div>

          </div>
          <div className='bg-white w-full w-[900px] h-[316px] mt-5'>

          </div>
          </div>
          :""
        }
    </Layout>
  )
}

export default Analytics
