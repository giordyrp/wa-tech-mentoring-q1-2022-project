import React from 'react';
import { Link } from 'react-router-dom';
import Col from '../Col';
import FlexDiv from '../FlexDiv';
import Logo from '../Logo';
import Row from '../Row';
import * as Styled from './Footer.styled';

const Footer = () => {
  return (
    <Styled.Footer>
      <Row justify="space-evenly" align="center">
        <Col xs={12} sm={6}>
          <Styled.LogoFlexDiv direction="column" align="center">
            <Logo dark />
            <p>Everything for your home</p>
          </Styled.LogoFlexDiv>
        </Col>
        <Col xs={12} sm={6}>
          <FlexDiv justify="center">
            <div>
              <Styled.Title>PAGES</Styled.Title>
              <Styled.Links>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Abouts us</Link>
              </Styled.Links>
            </div>
          </FlexDiv>
        </Col>
      </Row>
      <Styled.Message>Ecommerce created during Wizeline’s Academy React Bootcamp</Styled.Message>
    </Styled.Footer>
  );
};

export default Footer;
