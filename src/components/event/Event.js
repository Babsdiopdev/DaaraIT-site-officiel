import React from 'react';
import './Event.css';
import { RiShareForwardFill } from 'react-icons/ri';
import { AiFillCalendar } from 'react-icons/ai';
import { GrView } from 'react-icons/gr';

import CardImg from '../../ressources/images/cardimg.jpg';

const Event = () => {
  return (
    <div className="grid-item">
      <div className="headerCard">
        <div>
          <span></span>
          <h4>Lorem ipsum</h4>
        </div>
        <button>
          Partager
          <RiShareForwardFill />
        </button>
      </div>
      <div className="cardBody">
        <div className="category">
          <span>Tech</span>
          <span>Coding</span>
          <span>WebDev</span>
        </div>
        <img src={CardImg} alt="cardimage" className="cardimage" />
        <p className="subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy the
          industry's standard dummy industry's standard dummy industry's
          standard dummy.
        </p>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          the industry's standard dummy
        </p>
      </div>
      <div className="cardfooter">
        <button>En savoir plus</button>
        <div className="dateview">
          <span>
            <AiFillCalendar className="icon" />
            Il y a 6 mois
          </span>
          <span>
            <GrView className="icon" />
            1.6k vues
          </span>
        </div>
      </div>
    </div>
  );
};

export default Event;
