import React from 'react';
import styled, { css } from 'styled-components';

export interface FlexDivProps {
  justify?: string;
  align?: string;
  direction?: string;
  flex?: number | string;
  wrap?: string;
  width?: number | string;
  className?: string;
  onClick?: (e: React.FormEvent) => void;
}

export const FlexDiv = styled.div<FlexDivProps>`
  display: flex;
  ${({ justify, align, direction, flex, wrap, width }) => [
    justify &&
      css`
        justify-content: ${justify};
      `,
    align &&
      css`
        align-items: ${align};
      `,
    direction &&
      css`
        flex-direction: ${direction};
      `,
    flex &&
      css`
        flex: ${flex};
      `,
    wrap &&
      css`
        flex-wrap: ${wrap};
      `,
    width &&
      css`
        width: ${width};
      `,
  ]}
`;
