import React from 'react';
import * as Styled from './Empty.styled';
import Box from '../../assets/images/box.png';

interface EmptyProps {
  message: string;
}

const Empty: React.FC<EmptyProps> = ({ message }) => {
  return (
    <Styled.Empty>
      <Styled.Image src={Box} />
      <Styled.Message>{message}</Styled.Message>
    </Styled.Empty>
  );
};

export default Empty;
