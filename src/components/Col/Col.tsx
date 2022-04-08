import React from 'react';
import { IGrid } from 'types';
import * as Styled from './Col.styled';

const Col: React.FC<IGrid> = (props) => {
  return <Styled.Col {...props}>{props.children}</Styled.Col>;
};

export default Col;
