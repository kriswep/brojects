import React, { Component } from 'react';
import { connect } from 'react-redux'

import Auth from '../components/Auth';
import Repo from '../components/Repo';

import { setCurrentRepo } from '../actions/repos';
import { setAuthtoken } from '../actions/auth';
import { getColumns } from '../actions/columns';
import { getColumnData } from '../actions/columnData';
import { getRepos } from '../actions/repos';
import { getProjects } from '../actions/projects';
import { getCards } from '../actions/cards';
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
        <Repo 
          repos={this.props.repos}
          currentRepo={this.props.currentRepo}
          onChange={this.props.onChangeRepo}/>
      </section>
    );
  }
};

export const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    repos: state.repos.data,
    currentRepo: state.repos.currentRepo,
    columns: state.columns,
    columnData: state.columnData,
    cards: state.cards,
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
      dispatch(getProjects('kriswep/modern-modular-javascript'));
      dispatch(getColumns('324041'));
      dispatch(getCards('575404'));
    },
    onChangeRepo: (event) => {
      dispatch(setCurrentRepo(event.target.value));
    },
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default ConnectedApp;
