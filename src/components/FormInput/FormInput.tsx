import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { IGrid } from 'types';
import { IInput } from '../Form/Form.type';

interface FormInputProps {
  value: any;
  onChange: (id: string, value: any) => void;
  config: IInput['config'];
  error?: string;
  grid: IGrid;
}

const FormInput: React.FC<FormInputProps> = ({
  value,
  onChange,
  config,
  error,
  grid,
}) => {
  let component = null;

  switch (config.component) {
    case 'text-field':
      {
        const inputProps: { [key: string]: any } = {};
        switch (config.type) {
          case 'textarea':
            inputProps.multiline = true;
            break;
          default:
        }
        component = (
          <TextField
            value={value}
            onChange={(evt) => onChange(config.props.id, evt.target.value)}
            label={config.label}
            fullWidth
            error={Boolean(error)}
            helperText={error}
            {...config.props}
            {...inputProps}
          />
        );
      }
      break;
    default:
      console.error('Input not found');
  }

  return (
    <Grid item {...(config.grid ?? grid)}>
      {component}
    </Grid>
  );
};
export default FormInput;
