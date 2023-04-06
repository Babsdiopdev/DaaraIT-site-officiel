import React, { useState } from 'react';
import SweetPagination from 'sweetpagination';
import Banner from '../../components/Banner/Banner';
import BannerImg from '../../ressources/images/commission.png';
import { BiSearch } from 'react-icons/bi';
import './Galerie.css';
import { evenements } from '../../data/evenements';
import Event from '../../components/event/Event';

const Galerie = () => {
  const [currentPageData, setCurrentPageData] = useState(new Array(3).fill());
  return (
    <div className="w-full h-auto pb-20">
      <Banner title="Galerie" img={BannerImg} />
      <div className="eventsContent">
        <div className="filters">
            <div className='filter'>Tous</div>
            <div className='filter'>Edge</div>
            <div className='filter'>SUP'INFO</div>
            <div className='filter'>ISM</div>
            <div className='filter'>IAM</div>
          
          {/*  input select */}
            <div className="select">
                <select name="select" id="select">
                    <option value="1">Tous</option>
                    <option value="2">Edge</option>
                    <option value="3">SUP'INFO</option>
                    <option value="4">ISM</option>
                    <option value="5">IAM</option>
                </select>
            </div>
        
        </div>
        
      </div>
    </div>
  );
};

export default Galerie;
