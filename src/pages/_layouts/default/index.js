import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import Navbar from '../../../components/Navbar';

export default function DefaultLayout({ children }) {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="content">
        {children} 
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
