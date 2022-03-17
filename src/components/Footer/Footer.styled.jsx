import styled from 'styled-components';
import FlexDiv from '../FlexDiv';

export const Footer = styled.footer`
  background-color: #353535;
  color: white;
`;

export const Title = styled.h3`
  font-weight: bold;
`;

export const Links = styled.div`
  a {
    display: block;
    text-decoration: none;
    color: white
  }
`;

export const Message = styled.p`
  background-color: black;
  text-align: center;
  margin: 0;
  padding: 5px;;
`;

export const LogoFlexDiv = styled(FlexDiv)`
  padding: 1rem 2rem;
`;