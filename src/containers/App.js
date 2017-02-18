import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Layout, Header, HeaderRow, Drawer, Navigation, Content, Footer, FooterSection } from 'react-mdl';

import Auth from '../components/Auth';
import Repo from '../components/Repo';

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
            <p>Better Github projects</p>
          </Header>
          <Drawer title={title} >
            <Navigation>
              <a href="">TODO</a>
              <a href="">TODO</a>
            </Navigation>
          </Drawer>
          <Content>
            <Auth
              onChange={this.props.onChange}
              onSubmit={this.props.onSubmit}
              onClick={this.props.onClick}
              authToken={this.props.authToken} />
            <Repo
              repos={this.props.repos}
              currentRepo={this.props.currentRepo}
              onChange={this.props.onChangeRepo} />
          </Content>
          <Footer size="mini">
            <FooterSection type="left" logo={title} />
          </Footer>
        </Layout>

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
