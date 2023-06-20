import React from "react";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import SearchIcon from "@mui/icons-material/Search";
import CallIcon from '@mui/icons-material/Call';
import Logo from "@/assets/logo.png"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Image from "next/image";
import Link from "next/link";
const SideBar = ({isActivePage, classn}) => {
    // const isActivePage = "true";
  return (
    <div className={`flex flex-col w-[290px] h-[98vh] m-auto ml-2 rounded-tr-lg rounded-br-lg bg-[#00484E] py-5 ${classn}`}>
      <div className="flex justify-between px-3">
        <div className="h-7 w-7 bg-white rounded-full">
          <Image src={Logo}  alt="" className="w-4 h-6 ml-2"/>
        </div>
        <div className="h-7 w-7 bg-white rounded-full">
          <KeyboardDoubleArrowLeftIcon/>
        </div>
      </div>
      <div className="relative my-5 px-3">
        <input
          type="text"
          className="py-2 px-4 py-3 mx-[2px] pl-16 rounded-lg border-gray-300 focus:ring focus:border-blue-500 focus:outline-none w-fit  bg-[#F3F4F5] bg-opacity-20 text-white"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 left-3 pr-3 flex items-center pointer-events-none">
          <SearchIcon
            className="mx-5 my-4 text-gray-400 "
            style={{ color: "#D0D3D8" }}
          />
        </div>
      </div>
    <div className="text-[]">
      {/* <a className={`flex text-white py-3 px-3 text-[#A1A6B1] border-b border-[#A1A6B1]  ${isActivePage =="DASHBOARD" ? 'text-white bg-[#009A96]' : 'text-[#A1A6B1]'}`} href="/app/dashboard">
        <DashboardCustomizeIcon style={{margin:"0 10px"}}/>
        <p className={`pl-2 capitalize  ${isActivePage =="DASHBOARD" ? 'text-white' : 'text-[#A1A6B1]'}`}>DASHBOARD</p>
      </a> */}
      <Link href={"/main/coursesmanagement"} className={`flex text-white py-3 pl-3  border-b border-[#A1A6B1] ${isActivePage =="COURSES MANAGEMENT" ? 'text-white bg-[#009A96]' : 'text-[#A1A6B1]'}` } >
        {/* <a  > */}
          <DashboardCustomizeIcon style={{margin:"0 10px"}}/>
          <p className={`pl-2 capitalize ${isActivePage =="COURSES MANAGEMENT" ? 'text-white' : 'text-[#A1A6B1]'}`}>COURSES MANAGEMENT</p>
        {/* </a> */}
      </Link>
      <Link href={"/main/usermanagement"} className={`flex text-white py-3 px-3  border-b border-[#A1A6B1] ${isActivePage =="USER MANAGEMENT" ? 'text-white bg-[#009A96]' : 'text-[#A1A6B1]'}`} >
        {/* <a > */}
          <DashboardCustomizeIcon style={{margin:"0 10px"}} />
          <p className={`pl-2 capitalize  ${isActivePage =="USER MANAGEMENT" ? 'text-white' : 'text-[#A1A6B1]'}`}>USER MANAGEMENT</p>
        {/* </a> */}
      </Link>
      <Link href={"/main/chat"} className={`flex text-white py-3 px-3  border-b border-[#A1A6B1] ${isActivePage =="CHAT MESSAGING" ? 'text-white bg-[#009A96]' : 'text-[#A1A6B1]'}`} >
        {/* <a > */}
          <DashboardCustomizeIcon style={{margin:"0 10px"}}/>
          <p className={`pl-2 capitalize  ${isActivePage =="CHAT MESSAGING" ? 'text-white' : 'text-[#A1A6B1]'}`}>CHAT MESSAGING</p>
        {/* </a> */}
      </Link>
      <Link href={"/main/settings"} className={`flex text-white py-3 px-3 border-b border-[#A1A6B1] ${isActivePage =="ACCOUNT SETTINGS" ? 'text-white bg-[#009A96]' : 'text-[#A1A6B1]'}`}>
        {/* <a  > */}
          <DashboardCustomizeIcon style={{margin:"0 10px"}}/>
          <p className={`pl-2 capitalize  ${isActivePage =="ACCOUNT SETTINGS" ? 'text-white' : 'text-[#A1A6B1]'}`}>ACCOUNT SETTINGS</p>
        {/* </a> */}
      </Link>
      <Link href={"/main/analytics"} className={`flex text-white py-3 px-3 border-b border-[#A1A6B1] ${isActivePage =="ANALYTICS" ? 'text-white bg-[#009A96]' : 'text-[#A1A6B1]'}`}>
      {/* <a  > */}
        <DashboardCustomizeIcon style={{margin:"0 10px"}}/>
        <p className={`pl-2 capitalize  ${isActivePage =="ANALYTICS" ? 'text-white' : 'text-[#A1A6B1]'}`}>ANALYTICS</p>
      {/* </a> */}
      </Link>
      <Link href={"/main/reports"} className={`flex text-white py-3 px-2 border-b border-[#A1A6B1] ${isActivePage =="REPORTS" ? 'text-white bg-[#009A96]' : 'text-[#A1A6B1]'}`}>
      {/* <a  > */}
        <DashboardCustomizeIcon style={{margin:"0 10px"}}/>
        <p className={`pl-2 capitalize  ${isActivePage =="REPORTS" ? 'text-white' : 'text-[#A1A6B1]'}`}>REPORTS</p>
      {/* </a> */}
      </Link>

    </div>
    {/* <div className="absolute bottom-[25px] left-[15px] w-[270px]">
      <a className="text-[#EDAD62] bg-[#FFFFFF] bg-opacity-20 py-3 px-10 rounded" href="/app/support">Help and Support <CallIcon style={{color:"#EDAD62"}}/></a>
    </div> */}
    </div>
  );
};

export default SideBar;
