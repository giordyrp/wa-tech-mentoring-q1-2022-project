import React from 'react';
import * as Styled from './FormInput.styled';
import Input from '../Input';
import Col from '../Col';
import PropTypes from 'prop-types';
import { formElementType, gridType } from '../../types';

const FormInput = React.memo(
  ({ value, onChange, grid, element, label }) => {
    let InputComponent = null;
    switch (element.type) {
      case 'input':
        InputComponent = Input;
        break;
      case 'textarea':
        InputComponent = Input.TextArea;
        break;
      default:
        return null;
    }
    return (
      <Col {...grid}>
        <Styled.FormInput direction="column">
          <label>{label}</label>
          <InputComponent
            value={value}
            onChange={(evt) => onChange(element.config.id, evt)}
            {...element.config}
          />
        </Styled.FormInput>
      </Col>
    );
  },
  (prevProps, nextProps) => prevProps.value === nextProps.value
);

FormInput.propTypes = {
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  grid: gridType,
  element: formElementType,
  label: PropTypes.string
};

export default FormInput;
