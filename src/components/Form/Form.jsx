import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Row';
import { formType } from '../../types';
import FormInput from '../FormInput/FormInput';
import _ from 'lodash';
import * as Styled from './Form.styled';

const Form = ({ form, setForm }) => {
  const onChangeInput = (id, evt) => {
    setForm((form) => {
      const newForm = _.cloneDeep(form);
      newForm.inputs[id].value = evt.target.value;
      return newForm;
    });
  };

  const inputs = Object.keys(form.inputs).map((key) => {
    const input = form.inputs[key];
    return <FormInput key={key} value={input.value} onChange={onChangeInput} grid={form.grid} {...input.config} />;
  });
  return (
    <Row>
      {inputs}
      {form.button && (
        <Styled.StyledButton width="-webkit-fill-available" {...form.button.config}>
          {form.button.text}
        </Styled.StyledButton>
      )}
    </Row>
  );
};

Form.propTypes = {
  form: formType.isRequired,
  setForm: PropTypes.func.isRequired,
};

export default Form;
