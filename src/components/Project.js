import React from 'react';
import { HeaderTabs, Tab } from 'react-mdl';

const Project = ({ projects = [], currentProject, onChangeProject }) => (
  <HeaderTabs ripple activeTab={currentProject} onChange={onChangeProject}>
    {/*onChange={(tabId) => this.setState({ activeTab: tabId })}*/}
    {projects.map((project) => {
      return (
        <Tab id={project.id} key={project.id}>{project.name}</Tab>
      );
    })}
  </HeaderTabs>
)

export default Project;

            {/*<HeaderTabs ripple  >
                            <Tab>Tab1</Tab>
                            <Tab>Tab2</Tab>
                            <Tab>Tab3</Tab>
                            <Tab>Tab4</Tab>
                            <Tab>Tab5</Tab>
                            <Tab>Tab6</Tab>
                        </HeaderTabs>*/}