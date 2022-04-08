import React from 'react';
import styled, { css } from 'styled-components';

const metrics: any = {
  shape: {
    circle: { borderRadius: '50%' },
  },
  size: {
    large: { padding: '12px 15px', height: '40px', fontSize: '18px' },
    default: { padding: '10px 13px', height: '36px', fontSize: '16px' },
  },
};

export interface ButtonProps {
  color?: string;
  shape?: 'circle';
  size?: 'large';
  icon?: React.ReactNode;
  width?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  border: none;
  padding: 10px 13px;
  border-radius: 8px;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      color: rgb(179, 185, 194) !important;
      background-color: rgb(230, 235, 241) !important;
    `}

  ${({ theme, color }) => {
    if (!color) return null;

    const colors: { [key: string]: [string, string] } = {
      primary: ['white', theme.colors.primary],
      transparent: ['black', 'transparent'],
      white: ['black', 'white'],
      danger: ['white', theme.colors.danger],
    };

    return css`
      color: ${colors[color][0]};
      background-color: ${colors[color][1]};
    `;
  }}

  ${({ size }) => {
    if (!size) return null;

    const { padding, fontSize } = metrics.size[size];

    return css`
      padding: ${padding};
      font-size: ${fontSize};
    `;
  }}

${({ shape }) => {
    if (!shape) return null;

    const { borderRadius } = metrics.shape[shape];

    return (
      shape &&
      css`
        border-radius: ${borderRadius};
        text-align: center;
      `
    );
  }}

    ${({ icon, size = 'default', children }) => {
    if (!icon) return null;

    const { height } = metrics.size[size];

    if (React.Children.toArray(children).length === 1) {
      return css`
        height: ${height};
        width: ${height};
        padding: 0;
      `;
    }
    return css`
      .svg-inline--fa {
        margin-right: 10px;
      }
    `;
  }}

  &:hover {
    cursor: pointer;
  }
`;
