import styled from 'styled-components';
import Row from '../Row';

export const CartProduct = styled(Row)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
export const Image = styled.img`
  width: 80%;
  height: 50px;
  object-fit: cover;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const Name = styled.h4`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }
`;
