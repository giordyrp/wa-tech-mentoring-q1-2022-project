import styled, { css } from 'styled-components';
import Button from '../Button';

export const Input = styled.input`
  height: 36px;
  border: 1px solid ${({ theme }) => theme.colors.border };
  border-radius: 4px;
  padding: 0 10px;

  ${({ width }) => width && css`width: ${width};` };
`;

export const SearchInput = styled(Input)`
  border-radius: 4px 0 0 4px;
`;

export const SearchButton = styled(Button)`
  border-radius: 0 8px 8px 0;
`;

export const TextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.border };
  border-radius: 4px;
  resize: none;
  padding: 10px;
`;