import './utils/testHarness';
import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Index, { IndexComponent } from './index.js';
// import App from './containers/App';

describe('index', () => {
  it('renders without crashing', () => {
    expect(JSON.stringify(
      Object.assign({}, Index, {_reactInternalInstance: 'censored'})
      )).toMatchSnapshot();
  });
  it('shallow renders without crashing', () => {
    // expect(JSON.stringify(
    //   Object.assign({}, Index, {_reactInternalInstance: 'censored'})
    //   )).toMatchSnapshot();
    const wrapper = shallow(<IndexComponent />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
