import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FlexDiv from '../FlexDiv';
import * as Styled from './Checkbox.styled';
import PropTypes from 'prop-types';

const Checkbox = ({ option, checked, onChange, dataTestId }) => {
  return (
    <Styled.Checkbox checked={checked} onClick={() => onChange(option)} data-testid={dataTestId}>
      <FlexDiv align="center">
        <i>{checked ? <FontAwesomeIcon icon={faCheck} /> : ''}</i>
        <Styled.Text data-testid={`${dataTestId}-text`}>{option.label}</Styled.Text>
      </FlexDiv>
    </Styled.Checkbox>
  );
};

Checkbox.Group = ({ options, value, onChange, dataTestId }) => {
  return (
    <FlexDiv direction="column" align="flex-start">
      {options.map((option) => (
        <Checkbox key={option.value} option={option} checked={value.includes(option.value)} onChange={onChange} dataTestId={dataTestId} />
      ))}
    </FlexDiv>
  );
};

const stringOrNumberType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

const optionShape = PropTypes.shape({
  label: PropTypes.string,
  value: stringOrNumberType,
});

Checkbox.propTypes = {
  option: optionShape,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string,
};

Checkbox.Group.propTypes = {
  options: PropTypes.arrayOf(optionShape),
  value: PropTypes.arrayOf(stringOrNumberType),
  onChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string,
};

export default Checkbox;
