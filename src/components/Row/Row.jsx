import React from 'react';
import * as Styled from './Row.styled';
import PropTypes from 'prop-types';

const Row = (props) => {
  return (
    <Styled.Row wrap="wrap" {...props}>
      {props.children}
    </Styled.Row>
  );
};

Row.propsTypes = {
  gutter: PropTypes.number,
};

export default Row;
