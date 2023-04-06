import TitleComponent from "../../components/modules/title";


const Actualites =()=>  {
    return ( 
        <div className="container-xl  bg-white px-[4rem] py-[5rem]">
          <TitleComponent title="Actualites" />
          <div className="my-[5rem]" style={{ overflow: "hidden" }}>
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-10">
              <div className="md:col-start-1 md:col-end-3  bg-red-600 bg-cover bg-no-repeat rounded-[4px] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjK-SvIvslqNmGnSm3QFgSmg2ETNiGIFS3Q&usqp=CAU')]">
                <div className="h-full w-full flex flex-col justify-center px-[2rem] py-[2.5rem] bg-gradient-to-r from-gray-900 to-gray-50 opacity-75">
                  <h1 className="text-white text-[1.1rem] font-[700]">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text
                  </h1>
                  <p className="text-white text-[.85rem] mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    porro dolorum amet tenetur explicabo asperiores est unde
                    dignissimos, ratione recusandae reiciendis! Molestias ad
                    accusamus consequatur autem nobis odio facere ut?
                  </p>
                </div>
              </div>
              <div className="md:col-start-3 md:col-end-6  bg-red-600 bg-cover bg-no-repeat rounded-[4px] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjK-SvIvslqNmGnSm3QFgSmg2ETNiGIFS3Q&usqp=CAU')]">
                <div className="h-full w-full flex flex-col justify-center p-[2rem] py-[2.5rem] bg-gradient-to-r from-gray-900 to-gray-50 opacity-75">
                  <h1 className="text-white text-[1.1rem] font-[700]">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text
                  </h1>
                  <p className="text-white text-[.85rem] mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    porro dolorum amet tenetur explicabo asperiores est unde
                    dignissimos, ratione recusandae reiciendis! Molestias ad
                    accusamus consequatur autem nobis odio facere ut?
                  </p>
                </div>
              </div>
              {/* <div className="min-w-[500px] max-w-[500px] bg-red-600 mr-6 bg-cover bg-no-repeat rounded-[4px] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjK-SvIvslqNmGnSm3QFgSmg2ETNiGIFS3Q&usqp=CAU')]">
              <div className="h-full w-full flex flex-col justify-center p-[2rem] py-[2.5rem] bg-gradient-to-r from-gray-900 to-gray-50 opacity-75">
                <h1 className="text-white text-[1.1rem] font-[700]">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text
                </h1>
                <p className="text-white text-[.85rem] mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  porro dolorum amet tenetur explicabo asperiores est unde
                  dignissimos, ratione recusandae reiciendis! Molestias ad
                  accusamus consequatur autem nobis odio facere ut?
                </p>
              </div>
            </div> */}
            </div>
          </div>
        </div>
     );
}

export default Actualites;