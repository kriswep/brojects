import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestRenderer from 'react-test-renderer';
// import { shallow } from 'enzyme';

import Auth from './Auth';

describe('Auth', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Auth />, div);
  });

  it('renders as expected', () => {
    const renderer = ReactTestRenderer.create(<Auth />);
    // const auth = shallowRenderer.render(<Auth />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  // it('renders a Header', () => {
  //   const wrapper = shallow(<Auth />);
  // expect(wrapper.toMatchSnapshot)
  //   // expect(wrapper.find('header').hasClass('App-header')).toBe(true);
  // });
});
