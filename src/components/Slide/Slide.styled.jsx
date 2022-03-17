import styled from 'styled-components';
import FlexDiv from '../FlexDiv';

export const Slide = styled.div`
  width: 100%;
  height: 550px;
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
`;

export const Background = styled.div`
  background: url('${({ url }) => url}');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  height: 100%;
  width: 100%;
`;

export const StyledFlexDiv = styled(FlexDiv)`
  max-width: 30vw;
  padding: 3rem;

  p {
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 50vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 70vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100vw;
  }
`;