import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Project from './Project';

describe('Project', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<Project />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders as expected', () => {
    const projects = [{
      id: '1',
      name: 'project/1'
    }, {
      id: '2',
      name: 'project/2'
    },
    ]

    const wrapper = shallow(<Project projects={projects} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('handles tab state', () => {
    const projects = [{
      id: '1',
      name: 'project/1'
    }, {
      id: '2',
      name: 'project/2'
    },
    ];
    const onChangeProject = jest.fn();

    const wrapper = shallow(<Project projects={projects} onChangeProject={onChangeProject} />);
    
    wrapper.find('HeaderTabs').simulate('change', 0);
    // correct state
    expect(wrapper.state().activeTab).toEqual(0);
    // onChangeProject called with the project as first arg
    expect(onChangeProject.mock.calls[0][0]).toEqual(projects[0]);
    wrapper.find('HeaderTabs').simulate('change', 1);
    // correct state
    expect(wrapper.state().activeTab).toEqual(1);
    // onChangeProject called with the project as first arg
    expect(onChangeProject.mock.calls[1][0]).toEqual(projects[1]);

  });
});