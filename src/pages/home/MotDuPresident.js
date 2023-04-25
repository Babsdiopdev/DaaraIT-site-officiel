import TitleComponent from "../../components/modules/title";
import motpresident from "../../data/motdupresi";
import image from "../../images/IMG_8278.jpg";
// import motpresident from "../../data/motdupresi"

const MotDuPresident =()=> {
    return ( 
        <div className="container-xl  bg-gray-50 px-[4rem] py-[5rem]">
          <TitleComponent title="Le mot du president" />
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-10">
            <div className=" h-[23rem] md:col-start-1 md:col-end-6 lg:col-start-1 lg:col-end-3">
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
               {motpresident.text}
              </p>
              <h1 className={"text-[0.8rem] font-[700] text-blue-500"}>
                {motpresident?.slogan}
              </h1>
            </div>
          </div>
        </div>
     );
}

export default MotDuPresident;