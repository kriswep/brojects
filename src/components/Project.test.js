import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Project from './Project';

describe('Project', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<Project />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders as expected', () => {
    const projects = [{
      id: 'projectID1',
      name: 'project/1'
    },{
      id: 'repoID2',
      name: 'project/2'
    },
    ]
    
    const wrapper = shallow(<Project projects={projects} currentProject={0}/>);

    expect(toJson(wrapper)).toMatchSnapshot();    
  });
});