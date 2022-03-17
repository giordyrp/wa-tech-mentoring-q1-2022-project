import React from 'react';
import * as Styled from './Empty.styled';
import Box from '../../assets/images/box.png'; 
import PropTypes from 'prop-types';

const Empty = ({ message }) => {
  return (
    <Styled.Empty>
      <Styled.Image src={Box} />
      <Styled.Message>{message}</Styled.Message>
    </Styled.Empty>
  );
};

Empty.propTypes = {
  message: PropTypes.string,
};

export default Empty;
