import React from 'react'
import SideMenu from '../../components/modules/sidemenu'
import {ReactComponent as RightArrow} from "../../ressources/icons/right-arrow.svg"
import CommissionHeader from "../../ressources/images/commission.png"
import Menu from "../../components/modules/menu"
import Footer from '../../components/modules/footer'

const CommissionsDetails = () => {
  return (
    <div className='relative w-full h-screen'>
      <Menu/>
      <div className='corps flex'>
        <SideMenu/>
        <div className='content w-full ml-[50px]'>
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
            <div className='w-[350px] p-8 pr-4 flex flex-col items-center sticky top-12'>
              <div className='w-[260px] h-8 mb-2 px-3 text-xs text-white bg-[#2359AD] hover:bg-[#2359AD] hover:text-white hover:scale-[1.02] hover:translate-x-[4px] duration-300 shadow-sm rounded-sm flex items-center justify-between'>
                <p className=''>lorem</p><span>&#62;</span>
              </div>
              <div className='w-[260px] h-8 mb-2 px-3 text-xs bg-white hover:bg-[#2359AD] hover:text-white hover:scale-[1.02] hover:translate-x-[4px] duration-300 shadow-sm rounded-sm flex items-center justify-between'>
                <p className=''>lorem</p><span>&#62;</span>
              </div>
              <div className='w-[260px] h-8 mb-2 px-3 text-xs bg-white hover:bg-[#2359AD] hover:text-white hover:scale-[1.02] hover:translate-x-[4px] duration-300 shadow-sm rounded-sm flex items-center justify-between'>
                <p className=''>lorem</p><span>&#62;</span>
              </div>
              <div className='w-[260px] h-8 mb-2 px-3 text-xs bg-white hover:bg-[#2359AD] hover:text-white hover:scale-[1.02] hover:translate-x-[4px] duration-300 shadow-sm rounded-sm flex items-center justify-between'>
                <p className=''>lorem</p><span>&#62;</span>
              </div>
              <div className='w-[260px] h-8 mb-2 px-3 text-xs bg-white hover:bg-[#2359AD] hover:text-white hover:scale-[1.02] hover:translate-x-[4px] duration-300 shadow-sm rounded-sm flex items-center justify-between'>
                <p className=''>lorem</p><span>&#62;</span>
              </div>
              <div className='w-[260px] h-8 mb-2 px-3 text-xs bg-white hover:bg-[#2359AD] hover:text-white hover:scale-[1.02] hover:translate-x-[4px] duration-300 shadow-sm rounded-sm flex items-center justify-between'>
                <p className=''>lorem</p><span>&#62;</span>
              </div>
            </div>
            {/* details */}
            <div className='w-full pt-8'>
              <div className='w-full bg-white rounded-sm shadow-sm p-12'>
                <div className='w-full flex items-center pb-8 border-slate-100 border-b-[1px]'>
                  <div className='border-slate-100 border-r-[1px] pr-12'><div className='w-[300px] h-24 bg-gray-200 rounded-sm'></div></div>
                  <div className='px-12 flex flex-col items-start'>
                    <span className='mb-4 text-lg font-semibold'>Programmation</span>
                    <span className='mb-4 text-sm font-medium'>Sous-Titre</span>
                    <span className='text-xs'>Libellé</span>
                  </div>
                </div>
                <div className='pt-6 text-xs leading-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet sem nisi. Etiam vel turpis et metus pretium dignissim ac nec nunc. Nunc imperdiet tempor purus eget hendrerit. Maecenas sagittis quis felis eget tempor. Integer fringilla, est at maximus auctor, eros ex ultricies orci, eu suscipit magna est ac nisi. Duis luctus, mi sed ultricies mattis, urna massa euismod purus, quis aliquet purus leo id orci. Sed vitae risus quis ante faucibus cursus. Sed sodales ultrices ante a posuere. In pharetra eu risus a imperdiet. Phasellus sed odio ut augue eleifend facilisis. Praesent quis vulputate lorem. Suspendisse eu mi cursus dolor lobortis consectetur. Duis cursus quis eros pulvinar faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                    <br/><br/>Sed eu maximus nibh, a molestie diam. Vestibulum viverra magna at magna commodo congue. Cras in velit ut nulla volutpat laoreet a sit amet risus. Maecenas ultricies augue faucibus metus gravida, vel auctor orci efficitur. Quisque aliquet ex id ligula interdum condimentum. Fusce in dui sit amet risus hendrerit dictum at volutpat neque. Praesent nec ultricies neque, sed convallis massa. Praesent augue urna, accumsan nec quam sed, fermentum porttitor urna.
                    <br/><br/>Quisque aliquet, ex et mollis elementum, turpis velit venenatis dui, condimentum elementum nisl ipsum et sem. Quisque semper, ipsum a lacinia volutpat, enim leo maximus tellus, commodo tempus tellus lorem convallis quam. Duis sagittis at neque eu placerat. Duis sed porttitor elit. Vivamus non nibh sed augue porta blandit. Aenean lobortis auctor quam laoreet dapibus. Pellentesque sit amet justo at enim auctor bibendum vel sit amet purus. Mauris pharetra velit ac eros gravida semper. Sed justo dui, consequat vel laoreet sit amet, dignissim tincidunt erat. Duis sed felis a arcu porttitor suscipit in vel velit. Integer dapibus sit amet arcu id tempus.
                    <br/><br/>Vivamus in erat lorem. Proin eleifend nisl id velit malesuada venenatis. Nunc nec est sed nunc egestas semper. Mauris quis dolor est. Nam elementum elit et augue lacinia eleifend. Ut laoreet quam nec euismod euismod. Vivamus volutpat tincidunt diam, sed euismod nibh maximus ac. Morbi placerat justo sed feugiat malesuada. Nunc id consectetur urna. Vivamus vulputate egestas varius. Etiam id neque eros. Ut eu neque tincidunt felis laoreet cursus.
                    <br/><br/>Sed congue, neque eu suscipit vehicula, erat urna egestas urna, sit amet rhoncus risus odio ac tortor. In maximus sem sit amet dolor mattis venenatis. Vivamus non imperdiet lacus. Sed lacinia at lorem vel malesuada. Donec sit amet purus blandit, commodo odio vitae, lacinia orci. Nunc pulvinar pulvinar neque eu tincidunt. Curabitur elit tortor, convallis sed nisi quis, suscipit bibendum tellus. Sed magna dolor, viverra eget lectus at, dignissim suscipit tellus. Phasellus sem nisi, hendrerit et tempus et, sollicitudin id nunc. Integer lacinia ligula ut dolor condimentum semper. Vestibulum ac aliquam metus. Ut ac egestas nunc. Pellentesque aliquet orci nec neque lobortis ultrices. In sit amet diam tempor ante egestas rutrum.
                </div>
              </div>
            </div>
          </div>
      <Footer/>
        </div>
      </div>
    </div>
  )
}

export default CommissionsDetails