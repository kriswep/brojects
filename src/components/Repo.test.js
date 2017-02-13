import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestRenderer from 'react-test-renderer';
// import { shallow } from 'enzyme';

import Repo from './Repo';

describe('Repo', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Repo />, div);
  });

  it('renders as expected', () => {
    const repos = [{
      id: 'repoID1',
      full_name: 'repo/1'
    },{
      id: 'repoID2',
      full_name: 'repo/2'
    },
    ]
    const renderer = ReactTestRenderer.create(<Repo repos={repos} currentRepo={'repoID2'}/>);
    // const auth = shallowRenderer.render(<Auth />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});