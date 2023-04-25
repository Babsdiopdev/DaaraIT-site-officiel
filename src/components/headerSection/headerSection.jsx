import React from "react";
import image from "../../images/IMG_8278.jpg";
import AliceCarousel from "react-alice-carousel";
import "./headersection.css";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

function HeaderSection() {
  const handleDragStart = (e) => e.preventDefault();

  // object-fit: cover; */
  //   width: 100px;
  //   aspect-ratio: 3/2;
  //   object-fit: contain;
  //   mix-blend-mode: color-burn;

  const items = [
    <img
      src={image}
      className="w-full h-[38rem] object-cover img-slide"
      onDragStart={handleDragStart}
      role="presentation"
      alt="slide"
    />,
    <img
      src={image}
      className="w-full h-[38rem] object-cover img-slide"
      onDragStart={handleDragStart}
      role="presentation"
      alt="slide"
    />,
    <img
      src={image}
      className="w-full h-[38rem] object-cover img-slide"
      onDragStart={handleDragStart}
      role="presentation"
      alt="slide"
    />,
  ];
  return (
    <>
      <div className="container-xl h-[38rem] bg-white grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-10">
        <div className="flex justify-center items-center h-full md:ml-8 p-[1rem] md:col-start-1 md:col-end-3 lg:col-start-1 lg:col-end-3">
          <div>
            <h1 className={"text-[2.2rem] font-[600]"}>
              L'informatique plus qu'une passion, un{" "}
              <span className={"text-blue-500"}>mode de vie</span>
            </h1>
            <p className={"text-[0.99rem] font-[500] my-6"}>
              Daara IT est une forte communauté sénégalaise regroupant de jeunes IT passionné (e)s par les technologies. <br/>
               La communauté a pour but de promouvoir le secteur de l’informatique et ses domaines connexes et de monter le niveau de compétence de ses membres afin de mieux booster leur employabilité. <br />
               Elle vise à favoriser l’échange entre le monde universitaire, les entreprises et les partenaires afin de développer des réflexions prospectives dans de secteur.
            </p>
            <button className={"bg-gray-500 text-white p-3 rounded-md flex"} >
              <IconPlayerPlayFilled style={{ marginRight: 10 }} />
              Regarder une video
            </button>
          </div>
        </div>
        <div className="h-[30rem] hidden md:block md:col-start-3 md:col-end-6 lg:col-start-3 lg:col-end-6">
          {/* <img
            src={image}
            alt=""
            className="h-full w-full"
            style={{ objectFit: "cover" }}
          /> */}
          <AliceCarousel mouseTracking items={items} />
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
