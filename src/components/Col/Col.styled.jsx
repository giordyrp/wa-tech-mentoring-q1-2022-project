import styled, { css } from 'styled-components';

export const Col = styled.div`
  max-width: 100%;

  ${({xs}) => xs && css`
    flex: 0 0 ${({xs}) => `${(xs/12)*100}%`};
    max-width: ${({xs}) => `${(xs/12)*100}%`};
  `};

  ${({sm}) => sm && css`
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex: 0 0 ${({sm}) => `${(sm/12)*100}%`};
      max-width: ${({sm}) => `${(sm/12)*100}%`};
    }
  `};

  ${({md}) => md && css`
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      flex: 0 0 ${({md}) => `${(md/12)*100}%`};
      max-width: ${({md}) => `${(md/12)*100}%`};
    }
  `};

  ${({lg}) => lg && css`
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      flex: 0 0 ${({lg}) => `${(lg/12)*100}%`};
      max-width: ${({lg}) => `${(lg/12)*100}%`};
    }
  `};

  

  
`;