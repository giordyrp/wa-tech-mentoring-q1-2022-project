import React from 'react';
import * as Styled from './Section.styled';
import PropTypes from 'prop-types';
import FlexDiv from '../FlexDiv';

const Section = ({ title, action, className, children }) => {
  return (
    <Styled.Section className={className}>
      <FlexDiv justify="space-between" align="center">
        {title && <Styled.Title>{title}</Styled.Title>}
        {action}
      </FlexDiv>
      {children}
    </Styled.Section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  action: PropTypes.element
};

export default Section;
