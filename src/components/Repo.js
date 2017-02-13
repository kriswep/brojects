import React from 'react'

const Repo = ({ repos = [], currentRepo, onChange }) => (
  <section>
    <select 
        value={currentRepo}        
        onChange={onChange}
        >
      {repos.map((repo) => {
        return (
          <option value={repo.id} key={repo.id}>{repo.full_name}</option>
        );
      })}
    </select>
  </section>
)

export default Repo;
