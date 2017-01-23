import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders a Header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header').hasClass('App-header')).toBe(true);
  });
});
