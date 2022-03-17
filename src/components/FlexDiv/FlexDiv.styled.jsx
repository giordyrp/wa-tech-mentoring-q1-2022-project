import styled, { css } from 'styled-components';

export const FlexDiv = styled.div`
  display: flex;
  ${({ justify, align, direction, flex, wrap, width }) => [
    justify && css` justify-content: ${justify};`,
    align && css`align-items: ${align};`,
    direction && css`flex-direction: ${direction};`,
    flex && css`flex: ${flex};`,
    wrap && css`flex-wrap: ${wrap};`,
    width && css`width: ${width}`,
  ]}
`;
