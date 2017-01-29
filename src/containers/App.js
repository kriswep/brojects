import React, { Component } from 'react';
import { connect } from 'react-redux'

import Auth from '../components/Auth';
import { setAuthtoken } from '../actions/auth';
import { getColumnData } from '../actions/columns';
import { getRepos } from '../actions/repos';
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  render() {
    return (
      <section className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>&lt;BROJECTS&gt;</h2>
          <p>Better Github projects</p>
        </header>
        <p className="App-intro">
          Interactive and flexible project management on top of Github projects.
        </p>
        <Auth
          onChange={this.props.onChange}
          onSubmit={this.props.onSubmit}
          onClick={this.props.onClick}
          authToken={this.props.authToken}/>
      </section>
    );
  }
};

export const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    repos: state.repos,
    column: state.column,
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event) => {
      dispatch(setAuthtoken(event.target.value));
    },
    onSubmit: (event) => {
      //TODO
      event.preventDefault();
      dispatch(getColumnData('575404'));
    },
    onClick: (event) => {
      event.preventDefault();
      dispatch(getRepos());
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default ConnectedApp;
