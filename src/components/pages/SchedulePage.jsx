import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

import '../../css/pages/schedulepage.scss';
import axios from 'axios';

const divisions = ['All', 'Platinum', 'Gold', 'Silver', 'Bronze', '35+', '40+', 'Womans'];
class SchedulePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schedule: {},
    };
  }

  componentDidMount = () => {
    this.filterByDivision('All');
  };

  filterByDivision = division => {
    if (division === 'All') {
      axios.get('http://localhost:5000/api/schedule').then(response => {
        // console.log('response:', response.data);
        const schedule = [];
        response.data.forEach(entryObj => {
          schedule.push({
            ...entryObj,
            date: new Date(entryObj.date).toLocaleString(),
          });
        });

        schedule.sort(function(a, b) {
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return new Date(b.date) - new Date(a.date);
        });
        console.log(schedule);
        // console.log('date:', schedule[0].date, 'date UTC:', new Date(schedule[0].date).toUTCString());
        this.setState({ schedule });
      });
    } else {
      axios.get(`http://localhost:5000/api/schedule/division/${division}`).then(response => {
        const schedule = [];
        response.data.forEach(entryObj => {
          schedule.push({
            ...entryObj,
            date: new Date(entryObj.date).toLocaleString(),
          });
        });

        schedule.sort(function(a, b) {
          return new Date(b.date) - new Date(a.date);
        });
        this.setState({ schedule });
      });
    }
  };

  render() {
    const { schedule } = this.state;
    return (
      <div className="schedule-page">
        <h1 className="schedule-header-text">Schedule</h1>
        <hr className="page-line" />
        <div className="filter-bar">
          {Object.values(divisions).map(division => (
            <Button onClick={() => this.filterByDivision(division)}>{division}</Button>
          ))}
        </div>
        {Object.values(schedule).map(entry => (
          <div className="schedule-container">
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <div className="team-container">
                  <Typography variant="h6">{entry.teamOne_name} </Typography>
                  <Typography> vs. </Typography>
                  <Typography variant="h6"> {entry.teamTwo_name}</Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div className="time-container">
                  <Typography>
                    <strong>Date: </strong>
                    {entry.date}
                  </Typography>
                  <Typography>
                    <strong>Location: </strong>
                    {entry.location}
                  </Typography>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        ))}
      </div>
    );
  }
}

export default SchedulePage;
