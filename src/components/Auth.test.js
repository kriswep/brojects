import React from 'react';
import ReactDOM from 'react-dom';
// import ReactTestRenderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/css/material.indigo-pink.min.css';
import 'react-mdl/extra/material.js';

import Auth from './Auth';

const noop = () => { };

describe('Auth', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Auth />, div);
  });

  it('renders as expected', () => {
    // const renderer = ReactTestRenderer.create(<Auth />);
    const wrapper = shallow(<Auth
      onChange={noop}
      onSubmit={noop}
      onClick={noop}
      authtoken={'authtoken'}
    />);
    // expect(wrapper.find('header').hasClass('App-header')).toBe(true);

    expect(toJson(wrapper)).toMatchSnapshot();
    // expect(renderer.toJSON()).toMatchSnapshot();
  });

  // it('renders a Header', () => {
  //   const wrapper = shallow(<Auth />);
  // expect(wrapper.toMatchSnapshot)
  //   // expect(wrapper.find('header').hasClass('App-header')).toBe(true);
  // });
});
