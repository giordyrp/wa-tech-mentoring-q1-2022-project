import React from 'react';
import * as Styled from './Col.styled';
import PropTypes from 'prop-types';

const Col = (props) => {
  return (
    <Styled.Col {...props}>
      {props.children}
    </Styled.Col>
  );
};

Col.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
};

export default Col;
