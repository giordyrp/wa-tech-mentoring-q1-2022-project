import styled from 'styled-components'
import { Col } from '../Col/Col.styled';
import FlexDiv from '../FlexDiv';

export const Row = styled(FlexDiv)`
  margin-bottom: 10px;
  
  & > ${Col} {
    padding: ${({ gutter }) => {
      const padding = gutter ?? 8; 
      return `0 ${padding}px ${padding * 2 }px ${padding}px`
    }};
  }
`;