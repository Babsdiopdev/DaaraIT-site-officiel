import React from 'react';
import './Banner.css';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Banner = ({ title, img }) => {
  return (
    <div className=" banner w-full">
      <img src={img} alt="banner" className="bg w-full h-full" />
      <div className="infos">
        <h2>{title}</h2>
        <p>
          <span>daaraIT</span> <HiOutlineArrowNarrowRight />
          {title}
        </p>
      </div>
    </div>
  );
};

export default Banner;
