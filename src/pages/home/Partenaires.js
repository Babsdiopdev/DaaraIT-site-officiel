
import TitleComponent from "../../components/modules/title";
import image2 from "../../images/Huawei-logo.png";

const Partenaires = ()=> {
    return ( 
        <div className="container-xl  bg-white px-[4rem] py-[5rem]">
          {/* <h1
            className={
              "text-[1.3rem] font-[700] border-l-[10px] border-blue-500 px-6 "
            }
          >
            
          </h1> */}
          <TitleComponent title="Ils nous ont fait confiance" />

          <div className="my-[5rem]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
              <div className="py-4 flex items-center justify-center shadow-lg">
                <img className="w-[150px]" src={image2} alt="logo" />
              </div>
              <div className="py-4 flex items-center justify-center shadow-lg">
                <img className="w-[150px]" src={image2} alt="logo" />
              </div>
              <div className="py-4 flex items-center justify-center shadow-lg">
                <img className="w-[150px]" src={image2} alt="logo" />
              </div>
              <div className="py-4 flex items-center justify-center shadow-lg">
                <img className="w-[150px]" src={image2} alt="logo" />
              </div>
              <div className="py-4 flex items-center justify-center shadow-lg">
                <img className="w-[150px]" src={image2} alt="logo" />
              </div>
            </div>
          </div>
        </div>
     );
}

export default Partenaires;