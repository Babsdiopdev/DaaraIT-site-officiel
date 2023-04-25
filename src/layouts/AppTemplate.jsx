import React from 'react';
import { Outlet } from 'react-router-dom';

import SideMenu from '../components/modules/sidemenu';
import Menu from '../components/modules/menu';
import Footer from '../components/modules/footer';

const AppTemplate = () => {
  return (
    
    <div className="relative w-full h-screen">
      <Menu />
      <div className="corps flex">
        <SideMenu />
        <div className="content w-full  sm:ml-[50px] mt-[45px] bg-[#F2F2F2]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppTemplate;
