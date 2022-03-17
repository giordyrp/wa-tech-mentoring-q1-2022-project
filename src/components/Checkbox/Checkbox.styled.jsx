import styled from 'styled-components';
import Button from '../Button';

export const Checkbox = styled(Button)`
  color: ${({ checked }) => (checked ? 'white' : 'black')};
  border-radius: 0 15px 15px 0;
  margin-bottom: 10px;
  background-color: ${({ theme, checked }) => (checked ? theme.colors.primary : 'transparent')};
  padding: 4px 12px 4px 4px;

  i {
    display: inline-block;
    border: black solid 1px;
    border-radius: 4px;
    width: 20px;
    height: 20px;
    margin-right: 7px;
    background-color: white;
    color: ${({ theme, checked }) => (checked ? theme.colors.primary : 'black')};
  }
`;

export const Text = styled.p`
  margin: 0;
`;
