import React from 'react';
import * as Styled from './Section.styled';
import FlexDiv from '../FlexDiv';

interface SectionProps {
  title?: string;
  action?: React.ReactElement;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, action, className, children }) => {
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

export default Section;
