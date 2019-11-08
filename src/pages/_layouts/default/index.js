import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

import Sidebar from '../../../components/Sidebar';


export default function DefaultLayout( {children} ) {
  return (
    <Wrapper> 
      <Sidebar />
      {children}
      
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
};