import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-dit.png';
import { sidebarRoutes } from '../../routes/sidebar.routes';
import MenuItem from '../menu/MenuItem';
import ResourceDataMap from '../ResourceDataMap';

import './menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed z-[100] top-0 w-full h-[45px] flex items-center justify-between px-8 text-sm text-gray-900 bg-white shadow-xl">
      <div className="logo">
        <Link to="/" className="link">
          <img
            className="imageLogo"
            src={logo}
            alt="logo daara it "
            style={{}}
          />
          Daara IT
        </Link>
      </div>
      <div className="list-items h-full flex items-center justify-cente ">
        <ul className="list h-full flex items-center justify-between">
          <ResourceDataMap 
            resourceData={sidebarRoutes}
            resourceItem={MenuItem}
            resourceName="menuItem"
          />
        </ul>
      </div>
    </div>
  );
};
/*

    return (
        <div className='fixed z-[100] top-0 w-full h-[45px] flex items-center justify-between px-8 text-sm text-gray-900 bg-white shadow-xl'>
            <div className="logo"><a href="">LOGO</a></div>
            <div className="list-items h-full flex items-center justify-cente">
                <ul className="list h-full flex items-center justify-between">
                    <li className="item h-full flex items-center ml-8 px-2 py-[2px] hover:scale-110 hover:border-b-[2px] hover:border-black hover:pb-0 duration-150"><a href="" className=''>Accueil</a></li>
                    <li className="item h-full flex items-center ml-8 px-2 py-[2px] hover:scale-110 hover:border-b-[2px] hover:border-black hover:pb-0 duration-150"><a href="" className=''>A propos</a></li>
                    <li className="item h-full flex items-center ml-8 px-2 py-[2px] hover:scale-110 hover:border-b-[2px] hover:border-black hover:pb-0 duration-150"><a href="" className=''>Forum</a></li>
                    <li className="item h-full flex items-center ml-8 px-2 py-[2px] hover:scale-110 hover:border-b-[2px] hover:border-black hover:pb-0 duration-150"><a href="" className=''>Evénemants</a></li>
                    <li className="item h-full flex items-center ml-8 px-2 py-[2px] hover:scale-110 hover:border-b-[2px] hover:border-black hover:pb-0 duration-150"><a href="" className=''>Commissions</a></li>
                    <li className="item h-full flex items-center ml-8 px-2 py-[2px] hover:scale-110 hover:border-b-[2px] hover:border-black hover:pb-0 duration-150"><a href="" className=''>Galerie</a></li>
                </ul>
            </div>
        </div>
    )
*/

export default Menu