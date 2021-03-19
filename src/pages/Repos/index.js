import React from 'react';
import RepoTable from '../../components/Table';
import { NavLink, useHistory } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import './styles.css'

export default function Ativos() {
  
  const { location } = useHistory()

  return (
    <div className="table-container">
      <NavLink to="/">
        <div className="arrow-container">
          <Icon name="long arrow alternate left" size="large"/>
        </div>
      </NavLink>

      <RepoTable searchTerm={location.state.userInput}/>
    </div>
  );
}
