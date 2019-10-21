import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import '../../css/Team/roster.scss';

export default class Roster extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  constructor(props) {
    super(props);

    this.state = {
      players: [],
    };
  }

  componentDidMount = () => {
    const { team_id } = this.props;
    axios
      .get(`http://localhost:5000/api/players/${team_id}`)
      .then(response => {
        this.setState({
          players: response.data,
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { players } = this.state;
    const { closeModal } = this.props;
    return (
      <div className="roster-modal shadow-z-1">
        <div id="close-container">
          <button id="roster-close-button" type="button" onClick={() => closeModal()}>
            {/* <i className="fas fa-window-close" /> */}X
          </button>
        </div>
        <h3 className="roster-title">Roster</h3>
        <hr className="roster-line" />
        <table id="table" className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Points</th>
              <th>Rebounds</th>
              <th>Assists</th>
              <th>Steals</th>
              <th>Blocks</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(players).map(player => (
              <tr>
                <td data-title="Name">{player.name}</td>
                <td data-title="Points">{player.stats.points}</td>
                <td data-title="Rebounds">{player.stats.rebounds}</td>
                <td data-title="Assists">{player.stats.assists}</td>
                <td data-title="Steals">{player.stats.steals}</td>
                <td data-title="Blocks">{player.stats.blocks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
