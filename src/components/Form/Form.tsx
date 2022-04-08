import React from 'react';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from '@mui/material/Grid';
import FormInput from '../FormInput';
import Styled from './Form.styled';
import { formIsValid, setFormAttr, validateForm } from '../../utils/functions';
import { FormProps, IInput } from './Form.type';

const Form: React.FC<FormProps> = ({ form, setForm, onSubmit, loading }) => {
  const onChangeInput = (id: string, value: IInput['value']) => {
    let newForm = setFormAttr(form, id, 'value', value);
    if (form.valid !== undefined) newForm = validateForm(newForm);
    setForm(newForm);
  };

  const inputs = Object.keys(form.inputs).map((key) => {
    const input = form.inputs[key];
    return (
      <FormInput
        key={key}
        value={input.value}
        onChange={onChangeInput}
        config={input.config}
        error={input.error}
        grid={form.grid}
      />
    );
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit && formIsValid(form, setForm) && onSubmit();
  };

  const MyGrid = form.button ? Grid : Styled.HiddenGrid;

  return (
    <Styled.Form bordered={Boolean(form.title)}>
      <Styled.Title variant="h6">{form.title}</Styled.Title>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={5}>
          {inputs}
          <MyGrid item xs={12}>
            <Box textAlign="center">
              <LoadingButton
                type="submit"
                variant="contained"
                loading={loading}
                fullWidth
              >
                {form.button?.text}
              </LoadingButton>
            </Box>
          </MyGrid>
        </Grid>
      </form>
    </Styled.Form>
  );
};

export default Form;
