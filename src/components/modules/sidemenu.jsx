import React,{useState} from 'react'
import './sidemenu.css';
import {ReactComponent as FacebookIcon} from "../../ressources/icons/facebook.svg"
import {ReactComponent as InstagramIcon} from "../../ressources/icons/instagram.svg"
import {ReactComponent as TwitterIcon} from "../../ressources/icons/twitter.svg"
import {ReactComponent as YoutubeIcon} from "../../ressources/icons/youtube.svg"
import {ReactComponent as HomeIcon} from "../../ressources/icons/home.svg"

const SideMenu = () => {
    return (
        <div className='h-screen w-[50px] hidden sm:block fixed top-0 bg-[#0C1F3C] flex items-end'>
            <div className="w-full h-full flex items-center justify-between flex-col pb-2">
                <li className="vide"></li>
                <ul className="h-full flex items-center justify-center flex-col">
                    <li className="item w-6 h-6 my-6 rounded-sm bg-[#23344E] flex items-center justify-center p-1 -rotate-90 hover:scale-110 hover:rotate-0 duration-500 hover:bg-gradient-to-r hover:from-[#2C81FF] hover:via-[#1065E2] hover:to-[#2C81FF]"><FacebookIcon/></li>
                    <li className="item w-6 h-6 my-6 rounded-sm bg-[#23344E] flex items-center justify-center p-1 -rotate-90 hover:scale-110 hover:rotate-0 duration-500 hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045]"><InstagramIcon/></li>
                    <li className="item w-6 h-6 my-6 rounded-sm bg-[#23344E] flex items-center justify-center p-1 -rotate-90 hover:scale-110 hover:rotate-0 duration-500 hover:bg-gradient-to-r hover:from-[#5C9EFF] hover:via-[#2C81FF] hover:to-[#5C9EFF]"><TwitterIcon/></li>
                    <li className="item w-6 h-6 my-6 rounded-sm bg-[#23344E] flex items-center justify-center p-1 -rotate-90 hover:scale-110 hover:rotate-0 duration-500 hover:bg-gradient-to-r hover:from-[#b92727] hover:via-[#fd1d1d] hover:to-[#b92727]"><YoutubeIcon/></li>
                </ul>
                <li className="item w-6 h-6 rounded-sm bg-[#23344E] flex items-center justify-center p-1 hover:scale-110 hover:rotate-0 duration-500 hover:bg-[#2C81FF]"><HomeIcon/></li>
            </div>
        </div>
    )
}

export default SideMenu