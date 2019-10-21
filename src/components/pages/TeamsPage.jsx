import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Roster from '../Team/Roster';

import '../../css/pages/teamspage.scss';

export default class TeamsPage extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  constructor(props) {
    super(props);

    this.state = {
      teams: {},
      displayRoster: false,
      currentTeamId: '',
    };
  }

  componentDidMount = () => {
    axios
      .get('http://localhost:5000/api/teams')
      .then(response => {
        this.setState({ teams: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleRosterModal = id => {
    const { displayRoster } = this.state;
    this.setState({
      displayRoster: !displayRoster,
      currentTeamId: id,
    });
  };

  render() {
    const { teams } = this.state;
    return (
      <div className="team-page">
        <h1 className="team-header-text">Teams</h1>
        <hr className="page-line" />
        <div className="team-table">
          {Object.values(teams).map(team => (
            <div className="team-container">
              <h3 className="team-name">{team.name}</h3>
              <ul className="team-info">
                <li>
                  <button type="button">Stats</button>
                </li>
                <li>
                  <button type="button">Schedule</button>
                  {/* <Link players={teams.players}>Sc</Link> */}
                </li>
                <li>
                  <button onClick={() => this.handleRosterModal(team._id)} type="button">
                    Roster
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
        {this.state.displayRoster ? (
          <Roster team_id={this.state.currentTeamId} closeModal={this.handleRosterModal} />
        ) : (
          ''
        )}
        {/* <Roster team_id={this.state.currentTeamId} /> */}
      </div>
    );
  }
}
