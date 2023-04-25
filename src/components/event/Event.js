import React from 'react';
import './Event.css';
import { RiShareForwardFill } from 'react-icons/ri';
import { AiFillCalendar } from 'react-icons/ai';
import { GrView } from 'react-icons/gr';

const Event = ({ event }) => {
  console.log(event);
  return (
    <div className="grid-item">
      <div className="headerCard">
        <div>
          <span></span>
          <h4>{event?.title}</h4>
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
        <img src={event?.image} alt="cardimage" className="cardimage" />
        <p className="subtitle">{event?.subtitle}</p>
        <p className="description">{event?.desc}</p>
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
