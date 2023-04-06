import React from "react";
import image from "../../images/IMG_8278.jpg";

function HeaderSection() {
  return (
    <div className="container-xl h-[38rem] bg-white grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-10">
      <div className="flex justify-center items-center h-full md:ml-8 p-[2.2rem] md:col-start-1 md:col-end-3 lg:col-start-1 lg:col-end-3">
        <div>
          <h1 className={"text-[2.2rem] font-[600]"}>
            L'informatique plus qu'une passion, un{" "}
            <span className={"text-blue-500"}>mode de vie</span>
          </h1>
          <p className={"text-[0.99rem] font-[500] my-6"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            accusantium aliquid ab deleniti ea laboriosam, veniam officia rerum,
            vitae eos ipsum aut sapiente dignissimos soluta! Maiores recusandae
            consectetur corrupti eum!
          </p>
          <button className={"bg-blue-500 text-white p-3 rounded-md"}>
            Regarder une video
          </button>
        </div>
      </div>
      <div className="h-[38rem] hidden md:block md:col-start-3 md:col-end-6 lg:col-start-3 lg:col-end-6">
        <img
          src={image}
          alt=""
          className="h-full w-full"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export default HeaderSection;
