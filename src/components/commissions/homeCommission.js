import TitleComponent from "../modules/title";
import {minCard} from '../../data/commission'

const HomeCommission=()=> {
  
    return ( 
      <div className="container-xl  bg-gray-50 px-[4rem] py-[5rem]">
      <TitleComponent title="Non fortes commission" />
      <div className=" my-[4rem]">
        <div className="">
          <p className="text-[0.84rem] my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit officia deleniti, ea possimus amet, atque minima
            tenetur, commodi dignissimos doloremque debitis accusamus?
            Molestiae iste autem eius explicabo incidunt quisquam cumque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            alias at laudantium ab numquam, porro magnam corrupti! Nihil,
            quasi similique, deserunt quae labore inventore pariatur hic,
            nobis molestiae dolore animi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sed illo hic provident vitae minus
            iure possimus tempora perspiciatis ut earum ad, aliquam
            consectetur, est excepturi quas natus voluptatem, iste
            doloribus! Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
        <div className="mt-[3rem]">
          <p className="text-[0.84rem] my-4">
            Commodi quia temporibus autem eligendi, molestias doloribus,
            dolorum cumque vel illo odio tempora quos praesentium impedit
            nostrum, in rerum neque dignissimos expedita? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quia alias at laudantium
            ab numquam, porro magnam corrupti! Nihil, quasi similique,
            deserunt quae labore inventore pariatur hic, nobis molestiae
            dolore animi. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sed illo hic provident vitae minus iure possimus tempora
            perspiciatis ut earum ad, aliquam consectetur, est excepturi
            quas natus voluptatem, iste doloribus! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Commodi quia temporibus autem
            eligendi, molestias doloribus, dolorum cumque vel illo odio
            tempora quos praesentium impedit nostrum, in rerum neque
            dignissimos expedita?
          </p>
        </div>

        <div className="h-[1px] bg-gray-400 my-[5rem]"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {minCard.map((item, index) => (
            <div className="grid grid-cols-3 gap-8" key={index}>
              <div className="bg-white rounded-md flex items-center justify-center shadow-lg h-[90px] text-blue-500">
                <item.icon />
              </div>
              <div className="col-span-2">
                <h1 className="text-[1.3rem] font-[500] mb-2">
                  {item.title}
                </h1>
                <p className="text-[.73rem]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
     );
}

export default HomeCommission;