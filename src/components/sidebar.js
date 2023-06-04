import React from "react";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import SearchIcon from "@mui/icons-material/Search";
import CallIcon from '@mui/icons-material/Call';

const Sidebar = ({isActivePage}) => {
    // const isActivePage = "true";
  return (
    <div className="flex flex-col w-[290px] h-[98vh] m-auto ml-2 rounded-tr-lg rounded-br-lg bg-[#00484E] py-5 ">
      <div className="flex justify-between px-3">
        <div className="h-7 w-7 bg-white rounded-full"></div>
        <div className="h-7 w-7 bg-white rounded-full"></div>
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
    <div>
      <a className={`flex text-white py-3 px-3 my-4  ${isActivePage =="DASHBOARD" ? 'text-white bg-[#009A96]' : 'text-[#A1A6B1]'}`} href="/app/dashboard">
        <DashboardCustomizeIcon style={{margin:"0 10px"}}/>
        <p className="pl-3 capitalize">DASHBOARD</p>
      </a>
      <a className={`flex text-white py-3 px-3 my-4  ${isActivePage =="COURSES MANAGEMENT" ? 'text-white bg-[#009A96]' : 'text-[#A1A6B1]'}` } href="/app/courses-management">
        <DashboardCustomizeIcon style={{margin:"0 10px"}}/>
        <p className="pl-3 capitalize">COURSES MANAGEMENT</p>
      </a>
      <a className={`flex text-white py-3 px-3 my-4  ${isActivePage =="USER MANAGEMENT" ? 'text-white bg-[#009A96]' : 'text-[#A1A6B1]'}`} href="/app/user-management">
        <DashboardCustomizeIcon style={{margin:"0 10px"}}/>
        <p className="pl-3 capitalize">USER MANAGEMENT</p>
      </a>
      <a className={`flex text-white py-3 px-3 my-4  ${isActivePage =="CHAT MESSAGING" ? 'text-white bg-[#009A96]' : 'text-[#A1A6B1]'}`} href="/app/chat">
        <DashboardCustomizeIcon style={{margin:"0 10px"}}/>
        <p className="pl-3 capitalize">CHAT MESSAGING</p>
      </a>
      <a className={`flex text-white py-3 px-3 my-4  ${isActivePage =="ACCOUNT SETTINGS" ? 'text-white bg-[#009A96]' : 'text-[#A1A6B1]'}`} href="/app/settings">
        <DashboardCustomizeIcon style={{margin:"0 10px"}}/>
        <p className="pl-3 capitalize">ACCOUNT SETTINGS</p>
      </a>
      <a className={`flex text-white py-3 px-3 my-4  ${isActivePage =="ANALYTICS" ? 'text-white bg-[#009A96]' : 'text-[#A1A6B1]'}`} href="/app/analytics">
        <DashboardCustomizeIcon style={{margin:"0 10px"}}/>
        <p className="pl-3 capitalize">ANALYTICS</p>
      </a>
      <a className={`flex text-white py-3 px-3 my-4  ${isActivePage =="REPORTS" ? 'text-white bg-[#009A96]' : 'text-[#A1A6B1]'}`} href="/app/reports">
        <DashboardCustomizeIcon style={{margin:"0 10px"}}/>
        <p className="pl-3 capitalize">REPORTS</p>
      </a>

    </div>
    <div className="absolute bottom-[25px] left-[15px]">
      <a className="text-[#EDAD62] bg-[#FFFFFF] bg-opacity-20 py-3 px-12 rounded" href="/app/support">Help and Support <CallIcon style={{color:"#EDAD62"}}/></a>
    </div>
    </div>
  );
};

export default Sidebar;
