import styled, { css } from 'styled-components';
import { IGrid } from 'types';

export const Col = styled.div<IGrid>`
  max-width: 100%;

  ${({ xs }) =>
    xs &&
    css`
      flex: 0 0 ${`${(xs / 12) * 100}%`};
      max-width: ${`${(xs / 12) * 100}%`};
    `};

  ${({ sm }) =>
    sm &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex: 0 0 ${`${(sm / 12) * 100}%`};
        max-width: ${`${(sm / 12) * 100}%`};
      }
    `};

  ${({ md }) =>
    md &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        flex: 0 0 ${`${(md / 12) * 100}%`};
        max-width: ${`${(md / 12) * 100}%`};
      }
    `};

  ${({ lg }) =>
    lg &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        flex: 0 0 ${`${(lg / 12) * 100}%`};
        max-width: ${`${(lg / 12) * 100}%`};
      }
    `};
`;
