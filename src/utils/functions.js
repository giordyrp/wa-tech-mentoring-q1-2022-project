import { REQUIRED_TEXT } from '../constants';

export const deleteParam = (name) => {
  const params = new URLSearchParams(window.location.search);
  params.delete(name);
  return params.keys() === 0
    ? window.location.pathname
    : `${window.location.pathname}?${params.toString()}`;
};

export const setParam = (name, value) => {
  const params = new URLSearchParams(window.location.search);
  params.set(name, value);
  if (name !== 'page' && params.has('page')) params.delete('page');
  return `${window.location.pathname}?${params.toString()}`;
};

export const setFormAttr = (form, inputId, key, value) => {
  return {
    ...form,
    inputs: {
      ...form.inputs,
      [inputId]: {
        ...form.inputs[inputId],
        [key]: value,
      },
    },
  };
};

export const validateForm = (form) => {
  let formCopy = { ...form };
  let valid = true;
  Object.keys(form.inputs).forEach((inputId) => {
    let error = null;
    const { value, config } = form.inputs[inputId];
    if (config.regex && value !== '') {
      const valid = config.regex.pattern.test(value);
      if (!valid) error = config.regex.message;
    }
    if (config.dependency) {
      if (!['', null].includes(form.inputs[config.dependency.input].value)) {
        let valid = true;
        switch (config.dependency.type) {
          case 'password':
            valid = value === form.inputs[config.dependency.input].value;
            break;
          case 'date':
          case 'time':
            valid = value > form.inputs[config.dependency.input].value;
            break;
          default:
        }
        if (!valid) error = config.dependency.message;
      }
    }
    if (config.props.required && (value === '' || value == null)) {
      error = REQUIRED_TEXT;
    }
    formCopy = setFormAttr(formCopy, inputId, 'error', error);
    if (error) valid = false;
  });
  formCopy.valid = valid;
  return formCopy;
};

export const formIsValid = (form, setForm) => {
  if (form.valid === undefined) {
    const formCopy = validateForm(form);
    setForm(formCopy);
    return formCopy.valid;
  }
  return form.valid;
};

export const stringToColor = (string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

export const stringAvatar = (name) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
};
