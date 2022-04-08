import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FlexDiv from '../FlexDiv';
import * as Styled from './Checkbox.styled';
import { CheckboxProps, CheckboxGroupProps, IOption } from './Checkbox.type';

const Checkbox: React.FC<CheckboxProps> & { Group: React.FC<CheckboxGroupProps> } = ({
  option,
  checked,
  onChange,
  dataTestId,
}) => {
  return (
    <Styled.Checkbox
      checked={checked}
      onClick={() => onChange(option)}
      data-testid={dataTestId}
    >
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
      {options.map((option: IOption) => (
        <Checkbox
          key={option.value}
          option={option}
          checked={value.includes(option.value)}
          onChange={onChange}
          dataTestId={dataTestId}
        />
      ))}
    </FlexDiv>
  );
};

export default Checkbox;
