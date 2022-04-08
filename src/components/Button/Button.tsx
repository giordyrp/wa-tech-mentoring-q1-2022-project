import React from 'react';
import * as Styled from './Button.styled';

const Button: React.FC<Styled.ButtonProps> = (props) => {
  const { icon, children } = props;
  return (
    <Styled.Button {...props}>
      {icon}
      {children}
    </Styled.Button>
  );
};

export default Button;
