import TitleComponent from "../modules/title";
import {commissions, minCard} from '../../data/commission'
import { Link } from "react-router-dom";

const HomeCommission=()=> {
  
    return ( 
      <div className="container-xl  bg-gray-50 px-[4rem] py-[5rem]">
      <TitleComponent title="Nos commissions" />
      <div className=" my-[4rem]">
        <div className="">
          <p className="text-[0.84rem] my-4">
          </p>
        </div>

        <div className="h-[1px] bg-gray-400 my-[5rem]"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {commissions?.data.map((item, index) => (
            <Link to="/commissions" >
              <div className="grid grid-cols-3 gap-8" key={index}>
              <div className="bg-white rounded-md flex items-center justify-center shadow-lg h-[90px] text-blue-500">
                <item.icon />
              </div>
              <div className="col-span-2">
                <h1 className="text-[1.3rem] font-[500] mb-2">
                  {item.title}
                </h1>
                <p className="text-[.73rem]">{item.desc.substring(0, 69)}.....</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
     );
}

export default HomeCommission;