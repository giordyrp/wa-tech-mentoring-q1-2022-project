import React from 'react';
import * as Styled from './Button.styled';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <Styled.Button {...props}>
      {props.icon}
      {props.children}
    </Styled.Button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  shape: PropTypes.oneOf(['circle']),
  size: PropTypes.oneOf(['large']),
  icon: PropTypes.element,
};

export default Button;
