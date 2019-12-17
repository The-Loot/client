import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { Navbar, HomePage, SchedulePage, StandingsPage, TeamsPage, Roster, AdminLoginPage } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const links = {
  home: '/',
  teams: '/teams',
  standings: '/standings',
  schedule: '/schedule',
  roster: '/roster',
  admin: '/admin',
};

function App() {
  return (
    <div className="App">
      <Navbar links={links} />
      <Switch>
        <Route exact path={links.home} component={HomePage} />
        <Route exact path={links.teams} component={TeamsPage} />
        <Route exact path={links.schedule} component={SchedulePage} />
        <Route exact path={links.standings} component={StandingsPage} />
        <Route exact path={links.roster} component={Roster} />
        <Route exact path={links.admin} component={AdminLoginPage} />
      </Switch>
    </div>
  );
}

export default App;
