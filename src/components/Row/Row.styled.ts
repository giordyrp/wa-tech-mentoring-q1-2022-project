import styled from 'styled-components';
import { Col } from '../Col/Col.styled';
import FlexDiv from '../FlexDiv';

export interface RowProps {
  gutter?: number;
}

export const Row = styled(FlexDiv)<RowProps>`
  margin-bottom: 10px;

  & > ${Col} {
    padding: ${({ gutter }) => {
      const padding = gutter ?? 8;
      return `0 ${padding}px ${padding * 2}px ${padding}px`;
    }};
  }
`;
