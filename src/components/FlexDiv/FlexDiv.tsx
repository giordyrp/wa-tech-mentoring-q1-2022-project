import React from 'react';
import * as Styled from './FlexDiv.styled';

const FlexDiv: React.FC<Styled.FlexDivProps> = (props) => {
  const { children } = props;
  return <Styled.FlexDiv {...props}>{children}</Styled.FlexDiv>;
};

export default FlexDiv;
