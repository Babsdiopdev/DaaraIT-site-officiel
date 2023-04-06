import React, { Component } from 'react';
import './navbar.css';
import logo from '../../images/logo-dit.png';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="nav">
          <img
            className="imageLogo"
            src={logo}
            alt="logo daara it "
            style={{}}
          />
          <h2
            className="titre"
            style={{ display: 'inline-block', marginTop: 10 }}
          >
            {' '}
            Daara IT
          </h2>
          <nav className="menu">
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/a-propos">A propos</Link>
              </li>
              <li>
                <Link to="/forum">Forum</Link>
              </li>
              <li>
                <Link to="/evenements">Evenements</Link>
              </li>
              <li>
                <Link to="/commissions">Commissions</Link>
              </li>
              <li>
                <Link to="/Galerie">Galerie</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
