import React, { useState } from 'react';
import SweetPagination from 'sweetpagination';
import Banner from '../../components/Banner/Banner';
import BannerImg from '../../ressources/images/commission.png';
import { BiSearch } from 'react-icons/bi';
import './Events.css';
import { evenements } from '../../data/evenements';
import Event from '../../components/event/Event';

const Events = () => {
  const [currentPageData, setCurrentPageData] = useState(new Array(3).fill());
  return (
    <div className="w-full h-auto pb-20">
      <Banner title="Evenements" img={BannerImg} />
      <div className="eventsContent">
        <div className="filters">
          <div className="filter">
            <span>ALL</span>
            <span>Nouveautés</span>
            <span>Populaires</span>
          </div>
          <div className="search">
            <input type="text" placeholder="Rechercher" />
            <BiSearch className="searchIcon" />
          </div>
        </div>
        <div className="pagination">
          <div className="grid-container">
            {currentPageData.map((item, i) => (
              <Event key={i} />
            ))}
          </div>
          <SweetPagination
            currentPageData={setCurrentPageData}
            dataPerPage={9}
            getData={evenements.data}
            navigation={true}
            getStyle={'style-2'}
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
