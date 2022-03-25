import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const FormInput = ({ value, onChange, config, error, grid }) => {
  let component = null;

  switch (config.component) {
    case 'text-field':
      {
        const inputProps = {};
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
