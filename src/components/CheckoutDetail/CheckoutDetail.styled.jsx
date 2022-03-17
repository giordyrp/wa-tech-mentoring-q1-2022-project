import styled from 'styled-components';
import Card from '../Card';
import Col from '../Col';
import { Row } from '../Row/Row.styled';

export const BillingCol = styled(Col)`
  order: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 2;
  }
`;

export const OrderCol = styled(Col)`
  order: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 1;
  }
`;

export const StyledCard = styled(Card)`
  padding: 30px 20px 10px 20px;
  margin-bottom: 25px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    overflow-x: scroll;

    & > ${Row} {
      width: 400px;
      flex-grow: 0;
    }
  }
`;