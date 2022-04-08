import React from 'react';
import * as Styled from './Row.styled';
import { FlexDivProps } from '../FlexDiv/FlexDiv.styled';

const Row: React.FC<Styled.RowProps & FlexDivProps> = (props) => {
  const { children } = props;
  return (
    <Styled.Row wrap="wrap" {...props}>
      {children}
    </Styled.Row>
  );
};

export default Row;
