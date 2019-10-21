import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/navbar.scss';

export default class Navbar extends Component {
  static propTypes = {
    links: PropTypes.shape({
      home: PropTypes.string,
    }).isRequired,
  };

  render() {
    const { links } = this.props;
    return (
      <div className="navbar-container">
        <NavLink className="logo-container" to={links.home}>
          <img className="nav-logo" src="/images/main-logo.png" alt="The Loot" />
          <p className="company-name">THE LOOT</p>
        </NavLink>
        <div className="link-container">
          <ul className="desktop-nav">
            <li>
              <NavLink to={links.teams}>Teams</NavLink>
            </li>
            <li>
              <NavLink to={links.schedule}>Schedule</NavLink>
            </li>
            <li>
              <NavLink to={links.standings}>Standings</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
