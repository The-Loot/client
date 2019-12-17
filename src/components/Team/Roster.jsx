import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { Table } from 'react-bootstrap';

import '../../css/Team/roster.scss';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});
export default class Roster extends Component {
  static propTypes = {
    teamId: PropTypes.string.isRequired,
    closeModal: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      players: [],
    };
  }

  componentDidMount = () => {
    const { teamId } = this.props;
    axios
      .get(`http://localhost:5000/api/players/team/${teamId}`)
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
        <Paper className={useStyles.root}>
          <Table className={useStyles.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Points</TableCell>
                <TableCell align="right">Rebounds&nbsp;(g)</TableCell>
                <TableCell align="right">Assists&nbsp;(g)</TableCell>
                <TableCell align="right">Steals&nbsp;(g)</TableCell>
                <TableCell align="right">Blocks&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(players).map(player => (
                <TableRow key={player.name}>
                  <TableCell component="th" scope="row">
                    {player.name}
                  </TableCell>
                  <TableCell align="right">{player.stats.points}</TableCell>
                  <TableCell align="right">{player.stats.rebounds}</TableCell>
                  <TableCell align="right">{player.stats.assists}</TableCell>
                  <TableCell align="right">{player.stats.steals}</TableCell>
                  <TableCell align="right">{player.stats.blocks}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        {/* <Table responsive striped bordered>
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
        </Table> */}
      </div>
    );
  }
}
