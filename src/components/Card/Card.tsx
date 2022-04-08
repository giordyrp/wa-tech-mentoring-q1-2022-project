import React from 'react';
import * as Styled from './Card.styled';

interface CardProps {
  cover?: React.ReactElement;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ cover, children, ...restProps }) => (
  <Styled.Card {...restProps}>
    {' '}
    {cover && React.cloneElement(cover, { className: 'cover' })}
    {children}
  </Styled.Card>
);

export default Card;
