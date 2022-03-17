import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';

export const Count = styled(Input)`
  margin: 0 5px;
  width: 40px;
`;

export const CountButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.border} !important;
`;