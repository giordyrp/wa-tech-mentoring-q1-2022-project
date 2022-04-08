import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import * as Styled from './Input.styled';
import FlexDiv from '../FlexDiv';

interface InputProps {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  type?: string;
  onBlur?: () => void;
}

interface InputSearchProps extends InputProps {
  onSearch: () => void;
  className?: string;
}

const Input: React.FC<InputProps> & {
  Search: React.FC<InputSearchProps>;
  TextArea: React.FC;
} = (props) => {
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

export default Input;
