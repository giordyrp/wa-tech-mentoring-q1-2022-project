import styled from 'styled-components';
import { Card } from '../Card/Card.styled';
import Section from '../Section';
import Button from '../Button';

export const Carousel = styled(Section)`
  padding: 1rem 2rem;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: nowrap;
  transition: 0.3s;
  transform: ${({ translatePixels }) => `translateX(${translatePixels}px)`};
  width: ${({ width }) => `${width}px`};;

  ${Card} {
    margin: 0 1rem;
    flex-grow: 0;
    flex-shrink: 0;
  }
`;

export const Controls = styled.div`
  right: 20px;
  top: 20px;
`;

export const Control = styled(Button)`
  margin-left: 5px;
  background-color: unset;

  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
  }
`;