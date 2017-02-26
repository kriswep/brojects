import React from 'react';
import { HeaderTabs, Tab } from 'react-mdl';

class Project extends React.Component {
  constructor(props) {
    super(props)
    // this.state = { activeTab: props.currentProject.id };
    this.state = { activeTab: 0 };
  }

  render() {
    return (
      <HeaderTabs ripple activeTab={this.state.activeTab}
        onChange={(tabId) => {
          this.setState({ activeTab: tabId });
          this.props.onChangeProject(this.props.projects[tabId]);
        }
        }>
        {this.props.projects &&
          this.props.projects.map((project) => {
            return (
              <Tab id={Number(project.id)} key={project.id} >{project.name}</Tab>
            );
          })
        }
      </HeaderTabs>
    );
  }
}

export default Project;
