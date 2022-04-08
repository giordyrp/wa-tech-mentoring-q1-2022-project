export interface IOption {
  label: string;
  value: string | number;
}

export interface CheckboxProps {
  option: IOption;
  checked: boolean;
  onChange: (option: IOption) => void;
  dataTestId?: string;
}

export interface CheckboxGroupProps {
  options: IOption[];
  value: IOption['value'][];
  onChange: (option: IOption) => void;
  dataTestId?: string;
}
