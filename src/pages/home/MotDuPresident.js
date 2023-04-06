import TitleComponent from "../../components/modules/title";
import image from "../../images/IMG_8278.jpg";

const MotDuPresident =()=> {
    return ( 
        <div className="container-xl  bg-gray-50 px-[4rem] py-[5rem]">
          <TitleComponent title="Le mot du president" />
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-10">
            <div className="md:col-start-1 md:col-end-6 lg:col-start-1 lg:col-end-3">
              <img
                src={image}
                alt=""
                className="h-full w-full"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="md:col-start-1 md:col-end-6 lg:col-start-3 lg:col-end-6">
              <div className="flex  items-center text-blue-500">
                <h1
                  className={
                    "text-[1rem] font-[700] border-r-[5px] border-blue-500 pr-6 w-[2258x] mr-2"
                  }
                >
                  GERARD DACOSTA
                </h1>
                <span className="text-[0.75rem]">President de Daara-IT</span>
              </div>

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
                elit. Commodi quia temporibus autem eligendi, molestias
                doloribus, dolorum cumque vel illo odio tempora quos praesentium
                impedit nostrum, in rerum neque dignissimos expedita? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quia alias at
                laudantium ab numquam, porro magnam corrupti! Nihil, quasi
                similique, deserunt quae labore inventore pariatur hic, nobis
                molestiae dolore animi. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sed illo hic provident vitae minus iure
                possimus tempora perspiciatis ut earum ad, aliquam consectetur,
                est excepturi quas natus voluptatem, iste doloribus! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Commodi quia
                temporibus autem eligendi, molestias doloribus, dolorum cumque
                vel illo odio tempora quos praesentium impedit nostrum, in rerum
                neque dignissimos expedita?
              </p>
              <h1 className={"text-[0.8rem] font-[700] text-blue-500"}>
                " L'informatique plus qu'une passion, un monde de vie "
              </h1>
            </div>
          </div>
        </div>
     );
}

export default MotDuPresident;