import React from 'react';
import { IGrid } from 'types';

export interface IOption {
  value?: string | number;
  id?: string | number;
  label: string;
}

export interface IInput {
  value: any;
  config: {
    component: string;
    type?: string;
    props: {
      id: string;
      required?: boolean;
      [key: string]: any;
    };
    label?: string;
    options?: IOption[];
    regex?: {
      pattern: RegExp;
      message: string;
    };
    grid?: IGrid;
    dependency?: {
      input: string;
      type: 'password' | 'date' | 'time';
      message: string;
    };
  };
  error?: string;
}

export interface IForm {
  title?: string;
  inputs: {
    [key: string]: IInput;
  };
  button?: {
    text: string;
  };
  grid: IGrid;
  valid?: boolean;
}

export interface FormProps {
  form: IForm;
  setForm: React.Dispatch<React.SetStateAction<IForm>>;
  onSubmit?: () => void;
  loading?: boolean;
}
