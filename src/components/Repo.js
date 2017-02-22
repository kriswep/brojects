import React from 'react';
import { Drawer, Navigation } from 'react-mdl';

const Repo = ({ repos = [], title, currentRepo, onChangeRepo }) => (
    <Drawer title={title} >
      <Navigation>
        {repos.map((repo) => {
          return (
            <a href="#" id={repo.id} key={repo.id} onClick={onChangeRepo}>{repo.full_name}</a>
          );
        })}
      </Navigation>
    </Drawer>
)

export default Repo;
