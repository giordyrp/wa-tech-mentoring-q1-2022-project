import styled from 'styled-components';
import Card from '../Card';

export const CategoryCard = styled(Card)`
  width: ${({ width }) => `${width}px`};
  margin: ${({ margin }) => `0 ${margin}px`};
  cursor: pointer;
  
  p {
    margin: 7px 10px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 160px;
    height: 140px;
  }
`;

export const Cover = styled.img`
  height: 100px;
  object-fit: cover;
`;