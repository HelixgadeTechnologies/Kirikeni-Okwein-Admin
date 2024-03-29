import AppBarChart from '@/components/AppBarChart';
import DonutChart from '@/components/DonutChart';
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import AppLineChart from '@/components/AppLineChart';
import React, { useState } from 'react'

function Analytics() {
  const [switchOpen, setSwitchOpen] = useState("one");

  // return(
  //   <></>
  // )
  return (
    <Layout isActivePage="ANALYTICS">
       <Header>
          <div className="bg-white flex justify-between w-full mt-3 h-fit items-center px-10 rounded">
            <div>
            <p className="text-[20px] font-bold pt-5">Analytics</p>
            <div className="flex text-[#727A8B]">
              <p className={`pr-5 pt-5 pb-3 ${switchOpen=="one"?"text-[#5141A4] border-b border-[#5141A4]":"text-[#727A8B]"}`} onClick={()=>setSwitchOpen("one")}>User Analytics</p>
              <p className={`pt-5 pb-3 ${switchOpen=="two"?"text-[#5141A4]  border-b border-[#5141A4]":"text-[#727A8B] "}`} onClick={()=>setSwitchOpen("two")}>Course Analytics</p>
            </div>

            </div>
            {
              switchOpen=="one"? <button
              className="bg-[#005259] text-white py-4 px-5 h-[56px] rounded-[4px]"
              // onClick={ModalControl}
            >
               View Users
            </button>: <button
              className="bg-[#005259] text-white py-4 px-5 h-[56px] rounded-[4px]"
              // onClick={ModalControl4}
            >
              Add User
            </button>
            }
           
          </div>
          <div className='flex flex-grow mt-3 space-x-2'>
        <div className='bg-white px-2 py-3 rounded w-full'>
            <p className='text-[#727A8B] text-[16px]'>Number Of login</p>
            <b className='text-[23px]'>25</b>
        </div>
         <div className='bg-white px-2 py-3 rounded w-full'>
            <p className='text-[#727A8B] text-[14px]'>Average time per session</p>
            <b className='text-[23px]'>125 hours</b>
        </div>
        <div className='bg-white px-2 py-3 rounded w-full'>
            <p className='text-[#727A8B] text-[14px]'>Completion rate</p>
            <b className='text-[23px]'>75%</b>
        </div>
        <div className='bg-white px-2 py-3 rounded w-full'>
            <p className='text-[#727A8B] text-[14px]'>Average Course Rating</p>
            <b className='text-[23px]'>72%</b>
        </div>
        <div className='bg-white px-2 py-3 rounded w-full'>
            <p className='text-[#727A8B] text-[14px]'>Average Performance</p>
            <b className='text-[23px]'>72%</b>
        </div>
        
      </div>
        </Header>
        {
          switchOpen=="one"?
          <div className=''>
          <div className=' w-full h-[316px] mt-5 flex '>
            <div className='bg-white w-[70%] h-full rounded-lg p-5'>
              <AppLineChart/>
            </div>
            <div className='bg-white w-[28%] h-full ml-[20px] rounded-lg p-5'>
              <DonutChart/>
            </div>

          </div>
          <div className='bg-white w-full w-[900px] h-[316px] mt-5 rounded-lg p-5'>
            <AppBarChart/>
          </div>
          </div>
          :switchOpen=="two"?
          <div className=''>
          <div className=' w-full h-[316px] mt-5 flex '>
            <div className='bg-white w-[70%] h-full rounded-lg p-5'>
              <AppLineChart/>
            </div>
            <div className='bg-white w-[28%] h-full ml-[20px] rounded-lg p-5'>
              <DonutChart/>
            </div>

          </div>
          <div className='bg-white w-full w-[900px] h-[316px] mt-5 rounded-lg p-5'>
            <AppBarChart/>
          </div>
          </div>
          :""
        }
    </Layout>
  )
}

export default Analytics
