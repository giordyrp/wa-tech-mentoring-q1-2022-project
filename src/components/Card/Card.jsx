import React from 'react';
import * as Styled from './Card.styled';
import PropTypes from 'prop-types';

const Card = ({ cover, children, ...restProps }) => {
  return (
    <Styled.Card {...restProps}>
      {' '}
      {cover && React.cloneElement(cover, { className: 'cover' })}
      {children}
    </Styled.Card>
  );
};

Card.propTypes = {
  cover: PropTypes.element,
};

export default Card;
