import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const Layout = ({ children, isActivePage }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f7f8f9]">
  <div className="fixed h-screen w-56 bg-white border-r border-gray-200 top-2">
    <Sidebar isActivePage={isActivePage} classn='' />
  </div>
  <div className="flex-grow overflow-y-auto px-10 py-3 pl-[320px]">
    <TopBar/>
    {/* Main content */}
    {children}
  </div>
</div>

    // <div className="flex h-screen overflow-hidden bg-[#f7f8f9]">
    //   <Sidebar isActivePage={isActivePage} class="fixed" />
    //   <div className="flex-grow px-10 py-3">
    //   <TopBar/>
      
    //     {/* Main content */}
    //     {children}
    //   </div>
    // </div>
  );
};

export default Layout;
