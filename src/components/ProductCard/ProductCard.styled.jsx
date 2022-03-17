import styled from 'styled-components';
import Card from '../Card';
import FlexDiv from '../FlexDiv';

export const ProductCard = styled(Card)`
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: none;
  }
`;

export const Image = styled.img`
  height: 180px;
  object-fit: cover;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: -webkit-fill-available;
`;

export const Category = styled.p`
  text-transform: capitalize;
  margin-bottom: 0;
  color: gray;
  font-size: 14px;
`;

export const Price = styled.p``;

export const StyledFlexDiv = styled(FlexDiv)`
  padding: 10px
`;