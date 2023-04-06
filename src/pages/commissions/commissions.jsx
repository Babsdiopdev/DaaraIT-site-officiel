import React from 'react'
import img from "../../ressources/images/commission.png"
import Tab from "./Tab";
import { Data } from './data';

import SideMenu from '../../components/modules/sidemenu'
import {ReactComponent as RightArrow} from "../../ressources/icons/right-arrow.svg"
import CommissionHeader from "../../ressources/images/commission.png"
import Menu from "../../components/modules/menu"
import Footer from '../../components/modules/footer'

const Commissions = () => {
  return (
    <div className='relative w-full h-screen'>
      <div className='corps flex'>
      {/*
            <Menu/>

        <SideMenu/>
        */
      } 
        <div className='content w-full ml-[0px]'>
          {/* header */}
          <div className="relative w-full h-[290px]">
            <img className='h-full w-full' src={CommissionHeader} alt="" />
            <div className='absolute top-0 w-full h-full flex items-end justify-between px-12 py-8'>
            <p className='text-white text-3xl font-semibold'>Commissions</p>
              <div className='flex items-center'>
                <p className='text-white text-sm'>DaaraIT</p>
                <span className='w-[24px] h-[16px] mx-2 mt-1'><RightArrow/></span>
                <p className='text-white text-sm'>Commissions</p>
              </div>
            </div>
          </div>
          {/* content */}
          <div className='w-full flex items-start justify-start bg-[#F2F2F2]'>
            {/* menu */}
            <Tab state={1}>
              {Data.map((tab, index) => {
                  return (
                      <Tab.TabPane key={`Tab-${tab.index}`} tab={tab.title}>
                          {/* details */}
                          <div className='w-full pt-8'>
                            <div className={`w-full bg-white rounded-sm p-12 shadow-sm`}>
                              <div className='w-full flex items-center pb-8 border-slate-100 border-b-[1px]'>
                                <div className='border-slate-100 border-r-[1px] pr-12'>
                                  <div className='w-[300px] h-[100px] rounded overflow-hidden'>
                                    <img src={tab.image==="img1"?img:(tab.image==="img2"?img:(tab.image==="img3"?img:(tab.image==="img4"?img:img)))} alt="" className='h-full'/>
                                  </div>
                                </div>
                                <div className='px-12 flex flex-col items-start'>
                                  <span className='mb-4 text-xl font-semibold text-yellow-600'>{tab.title}</span>
                                  <span className='mb-4 text-sm font-medium text-[#2359AD]'>{tab.sub_title}</span>
                                  <span className='text-xs'>{tab.libelle}</span>
                                </div>
                              </div>
                              <div className='pt-6 text-xs leading-8'><span className='bg-slate-200 px-2 py-[2px] rounded-sm'>Mission</span><br />{tab.mission}</div>
                              <div className='pt-6 text-xs leading-8'><span className='bg-slate-200 px-2 py-[2px] rounded-sm'>Activités</span><br />{tab.activites}</div>
                              <div className='pt-6 text-xs leading-8'><span className='bg-slate-200 px-2 py-[2px] rounded-sm'>Projects</span><br />{tab.projets}</div>
                            </div>
                          </div>
                      </Tab.TabPane>
                  );
                })}
            </Tab>
          </div>
      <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Commissions