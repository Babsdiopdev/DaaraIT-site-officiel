import React from 'react'
import Header from '../../../elements/header';
import Footer from '../../../elements/footer';
import Menu from '../../../elements/menu/menu';
import Page_info from '../../../elements/page_info';
import bg from '../../res/images/service.jpeg';
import img1 from '../../res/images/';
import img2 from '../../res/images/';
import img3 from '../../res/images/';
import img4 from '../../res/images/';
import img5 from '../../res/images/';
import Tab from "./Tab";
import { Data } from './data';
import { useLocation } from "react-router";

const ServiceDetails = () => {
    
    const { state } = useLocation()
    console.log(state.page)

  return (
    <div>
        <Header/>
        <Menu/>
        <Page_info name={"Nos Services"} link={"Accueil > Nos Services > Détails"} bg={bg} textStyle={`text-white`} translate={'-translate-y-[20%]'}/>
        <div className='w-full xl:px-8 flex justify-center items-center flex-col font-normal lg:text-sm text-xs'>
            <div className='w-[100%] flex items-center flex-col  lg:p-8 md:p-4 px-2 py-4 bg-white text-black rounded'>
                <div className="w-full h-full text-black">
                    <Tab   state={state.page}>
                        {Data.map((tab, index) => {
                            return (
                                <Tab.TabPane key={`Tab-${tab.index}`} tab={tab.title}>
                                    <div className="w-full h-full rounded text-[0.6rem] md:text-[0.8rem]">
                                        <div className='w-full h-60 bg-gray-100 mb-2 md:mb-4 rounded overflow-hidden flex items-center justify-center'>
                                            <img src={tab.image==="img1"?img1:(tab.image==="img2"?img2:(tab.image==="img3"?img3:(tab.image==="img4"?img4:img5)))} alt="" className='w-1/6 h-auto'/>
                                        </div>
                                        <p className='md:py-4 py-2 px-4 md:px-8 w-full bg-gray-300 text-xs font-semibold rounded-t text-[0.6rem] md:text-[1rem] md:font-medium text-white'>Missions</p>
                                        <div className='bg-gray-100 rounded-b mb-2 md:mb-4 p-4 md:p-8 leading-6'>{tab.mission}</div>
                                        <p className='md:py-4 py-2 px-4 md:px-8 w-full bg-gray-300 text-xs font-semibold rounded-t text-[0.6rem] md:text-[1rem] md:font-medium text-white'>Activités</p>
                                        <div className='bg-gray-100 rounded-b mb-2 md:mb-4 p-4 md:p-8 leading-6'>{tab.activites}</div>
                                        <p className='md:py-4 py-2 px-4 md:px-8 w-full bg-gray-300 text-xs font-semibold rounded-t text-[0.6rem] md:text-[1rem] md:font-medium text-white'>Projets en cours</p>
                                        <div className='bg-gray-100 rounded-b p-4 md:p-8 leading-6'>{tab.projets}</div>
                                    </div>
                                </Tab.TabPane>
                            );
                        })}
                    </Tab>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ServiceDetails