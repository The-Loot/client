import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar, HomePage, SchedulePage, StandingsPage, TeamsPage, Roster } from './components';
import './App.scss';

const links = {
  home: '/',
  teams: '/teams',
  standings: '/standings',
  schedule: '/schedule',
};

function App() {
  return (
    <div className="App">
      <Navbar links={links} />
      <Switch>
        <Route exact path={links.home} component={HomePage} />
        <Route exact path={links.teams} component={TeamsPage} />
        <Route exact path={links.schedule} component={SchedulePage} />
        <Route exact path={links.schedule} component={StandingsPage} />
        <Route exact to="/roster" component={Roster} />
      </Switch>
    </div>
  );
}

export default App;
