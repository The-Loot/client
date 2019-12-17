import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../css/pages/adminpage.scss';

export default class AdminPage extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  constructor(props) {
    super(props);

    this.state = {
      email: 'afterafx@gmail.com',
      password: 'password',
    };
  }

  handleSubmit = event => {
    const { email, password } = this.state;
    event.preventDefault();
    const data = {
      username: email,
      password,
    };
    console.log(data);
    axios.post('http://localhost:5000/api/login', data).then(response => {
      localStorage.setItem('app-token', response.data.token);
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="admin-page">
        <div className="login-container">
          <img className="admin-logo" src="/images/main-logo.png" alt="" />
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Email" onChange={event => this.setState({ email: event.target.value })} />
            <input
              type="password"
              placeholder="Password"
              onChange={event => this.setState({ password: event.target.value })}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

// Java with Spring
