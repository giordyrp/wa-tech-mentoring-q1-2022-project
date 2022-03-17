import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import * as Styled from './Input.styled';
import PropTypes from 'prop-types';
import FlexDiv from '../FlexDiv';

const Input = (props) => {
  return <Styled.Input {...props} />;
};

Input.Search = ({ onSearch, className, ...restProps }) => {
  return (
    <FlexDiv justify="center" className={className}>
      <Styled.SearchInput {...restProps} />
      <Styled.SearchButton
        color="primary"
        icon={<FontAwesomeIcon icon={faSearch} />}
        onClick={onSearch}
      />
    </FlexDiv>
  );
};

Input.TextArea = (props) => {
  return <Styled.TextArea {...props} />;
};

Input.PropTypess = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  width: PropTypes.string,
};

Input.Search.PropTypess = {
  onSearch: PropTypes.func,
  ...Input.PropTypess,
};

export default Input;
