import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const Layout = ({ children, isActivePage }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f7f8f9]">
      <Sidebar isActivePage={isActivePage} />
      <div className="flex-grow px-10 py-3">
      <TopBar/>
      <Header/>
        {/* Main content */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
