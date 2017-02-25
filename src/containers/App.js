import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Layout, Header, HeaderRow, Content } from 'react-mdl';

import Auth from '../components/Auth';
import Repo from '../components/Repo';
import Project from '../components/Project';

import { setCurrentRepo } from '../actions/repos';
import { setAuthtoken } from '../actions/auth';
import { getColumns } from '../actions/columns';
import { getColumnData } from '../actions/columnData';
import { getRepos } from '../actions/repos';
import { getProjects } from '../actions/projects';
import { getCards } from '../actions/cards';
import './App.css';

const title='<BROJECTS>'

export class App extends Component {
  render() {
    return (
      <section className="App">

        <Layout fixedHeader>
          <Header waterfall>
            <HeaderRow title={title} />
            <Project 
              projects={this.props.projects}
              currentProject={this.props.currentProject}
              onChangeProject={this.props.onChangeProject} />
          </Header>
          <Repo
              repos={this.props.repos}
              title={title}
              onChangeRepo={this.props.onChangeRepo} />
          {/*<Drawer title={title} >
            <Navigation>
              <a href="">TODO</a>
              <a href="">TODO</a>
            </Navigation>
          </Drawer>*/}
          <Content>
            <Auth
              onChange={this.props.onChange}
              onSubmit={this.props.onSubmit}
              onClick={this.props.onClick}
              authToken={this.props.authToken} />
            
          </Content>
        </Layout>

      </section>
    );
  }
};
let currentProject = 0;
export const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    repos: state.repos.data,
    currentRepo: state.repos.currentRepo,
    projects: state.projects.data,
    currentProject, // state.repos.currentProject,
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
      // dispatch(getProjects('kriswep/modern-modular-javascript'));
      dispatch(getColumns('324041'));
      dispatch(getCards('575404'));
      dispatch(getColumnData('575404'));
    },
    onChangeRepo: (event) => {
      event.preventDefault();
      dispatch(setCurrentRepo(event.target.id));
      dispatch(getProjects());
    },
    onChangeProject: (event) => {
      console.log(event);
      currentProject = event;
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default ConnectedApp;
