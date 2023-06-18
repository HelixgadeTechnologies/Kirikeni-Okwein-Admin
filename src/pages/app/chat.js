import Header from "@/components/Header";
import Layout from "@/components/layout";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import WestIcon from "@mui/icons-material/West";
import ClosedChat from "@/assets/closedChat.png";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import ChatUser from "@/assets/chat-user.png"
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ChatBox from "@/components/ChatBox";

function Chat() {
  const [messaging, setMessaging] = useState(true)
  let friends =[
    {
      name:"Francis Ayum",
      time:"08:10am",
      message:"Happy birthday to you man!!",
      lastRead:true,
      typing:false
    },
    {
      name:"Francis Ayum",
      time:"08:10am",
      message:"Happy birthday to you man!!",
      lastRead:false,
      typing:false
    },
    {
      name:"Francis Ayum",
      time:"08:10am",
      message:"Happy birthday to you man!!",
      lastRead:true,
      typing:true
    },
    {
      name:"Francis Ayum",
      time:"08:10am",
      message:"Happy birthday to you man!!",
      lastRead:true,
      typing:false
    },
    {
      name:"Francis Ayum",
      time:"08:10am",
      message:"Happy birthday to you man!!",
      lastRead:false,
      typing:false
    },
    {
      name:"Francis Ayum",
      time:"08:10am",
      message:"Happy birthday to you man!!",
      lastRead:true,
      typing:true
    },
  ]
  return (
    <Layout isActivePage="CHAT MESSAGING">
      <Header Title={"User Management"} BtnText={"Add User"}>
        <div className="bg-white flex justify-between w-full mt-3 h-[96px] items-center px-10 py-5 rounded">
          <div>
            <p className="text-[20px] font-bold">Chat Messaging</p>
            {/* <div className="flex text-[#727A8B]">
              <p className={`pr-5 pt-5 pb-3 ${switchOpen=="one"?"text-[#5141A4] border-b border-[#5141A4]":"text-[#727A8B]"}`} onClick={()=>setSwitchOpen("one")}>User Analytics</p>
              <p className={`pt-5 pb-3 ${switchOpen=="two"?"text-[#5141A4]  border-b border-[#5141A4]":"text-[#727A8B] "}`} onClick={()=>setSwitchOpen("two")}>Course Analytics</p>
            </div> */}
          </div>
          <a
            className="bg-[#005259] text-white py-4 px-5 h-[56px]"
            // onClick={ModalControl}
          >
            <AddIcon />
            Create Ticket
          </a>
        </div>
        <div className="flex flex-grow mt-3 space-x-3">
          <div className="bg-white px-3 py-3 rounded w-full">
            <p className="text-[#727A8B]">Number Of login</p>
            <b className="text-[25px]">25</b>
          </div>
          <div className="bg-white px-3 py-3 rounded w-full">
            <p className="text-[#727A8B]">Average time per session</p>
            <b className="text-[25px]">125 hours</b>
          </div>
          <div className="bg-white px-3 py-3 rounded w-full">
            <p className="text-[#727A8B]">Completion rate</p>
            <b className="text-[25px]">75%</b>
          </div>
          <div className="bg-white px-3 py-3 rounded w-full">
            <p className="text-[#727A8B]">Average Course Rating</p>
            <b className="text-[25px]">72%</b>
          </div>
          <div className="bg-white px-3 py-3 rounded w-full">
            <p className="text-[#727A8B]">Average Performance</p>
            <b className="text-[25px]">72%</b>
          </div>
        </div>
      </Header>
      <div className="flex space-x-4 my-5 items-center">
        <a href="/app/course-module">
          <WestIcon />
        </a>
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
              <h1 className="text-[20px] font-bold">Chats</h1>
              <div className="flex jusify-between items-center space-x-4 pt-5 my-5">
                <span className="text-sm  text-[#434D64]">Filter:</span>
                <select className="border text-sm border-[#EEECF6]  text-[#434D64] py-3 px-4">
                  <option>Newest</option>
                </select>
                <button className="bg-[#005259] text-white text-sm py-3 px-2 h-[50px] rounded">
                  New Chat
                </button>
              </div>
              <div className="flex items-center">
                <div className=" my-1 relative">
                  <input
                    type="text"
                    className="py-2 px-8 py-2 mx-[2px] pl-16 rounded-lg border border-gray-300 focus:ring focus:border-blue-500 focus:outline-none w-full  bg-[#F3F4F5] bg-opacity-20 text-[#434D64]"
                    placeholder="Search"
                  />
                  <div className="absolute inset-y-0 left-3 pr-3 flex items-center pointer-events-none">
                    <SearchIcon
                      className="mx-5 my-4 text-gray-400 "
                      style={{ color: "#D0D3D8" }}
                    />
                  </div>
                </div>
              </div>
              <hr className="mt-4"/>
              {
                friends.length <=0?
                <div className="flex justify-center  items-center h-[400px]">No Chats</div>
                :<div className="my-2 flex space-y-2 flex-col h-[450px] overflow-x-scroll">
                 {friends.map((friend) => (
                  <div className="bg-gray-200 py-2 px-2 rounded flex items-center  space-x-2  " key={friend.id}>
                    <div className="w-1/5">
                    <Image src={ChatUser} alt="" />
                    </div>
                    <div className="w-3/4">
                      <p className="font-bold text-sm">{friend.name}</p>
                      {
                        friend.typing==false?<p className="text-sm text-[#727A8B]">{friend.message}</p>:<p className="text-sm text-[#5141A4]">typing...</p>
                      }
                      
                    </div>
                    <div className="flex flex-col items-center space-y-2 w-1/5">
                    <span>{friend.time}</span>
                    {
                      friend.lastRead==true?<div className="h-fit w-fit text-[#5141A4] px-2  text-white rounded-full"><DoneAllIcon style={{color:"#5141A4"}}/></div>:<div className="h-fit w-fit bg-[#5141A4] px-2  text-white rounded-full">1</div>
                    }
                    
                    </div>
                  </div>
                ))}     
                </div>
              }
            </div>
          </div>
          <div className="w-2/3 h-full">
            { messaging?
              <ChatBox/>
              :<div className="flex flex-col h-full justify-center items-center">
              <Image src={ClosedChat} alt="" />
              <div className="w-1/2 text-center">
                <h2>Chat Messaging</h2>
                <p>
                  Send and receive instant messages with ease. Use emojis, send
                  images and attach files.
                </p>
              </div>
            </div>
            }
            
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Chat;