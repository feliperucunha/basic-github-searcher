import React from 'react';
import Table from '../../components/Table';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import './styles.css'

export default function Ativos() {
  return (
    <div className="table-container">
      <NavLink to="/">
        <div className="arrow-container">
          <Icon name="long arrow alternate left" size="large"/>
        </div>
      </NavLink>

      <Table />
    </div>
  );
}
