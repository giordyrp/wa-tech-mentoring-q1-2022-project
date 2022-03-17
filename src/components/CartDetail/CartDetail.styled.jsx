import styled from 'styled-components';
import Card from '../Card';
import { Row } from '../Row/Row.styled';

export const ZeroMarginP = styled.p`
  margin: 0;
`;

export const StyledCard = styled(Card)`
  padding: 30px 20px 10px 20px;
  margin-bottom: 25px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    overflow-x: scroll;

    & > ${Row} {
      width: 800px;
      flex-grow: 0;
    }
  }
`;