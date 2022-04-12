import React from 'react';
import { IBanner } from 'types';
import * as Styled from './Slide.styled';

interface SlideProps {
  banner: IBanner;
}

const Slide: React.FC<SlideProps> = ({ banner }) => {
  const {
    title,
    description,
    image: { url: backgroundUrl },
  } = banner;

  return (
    <Styled.Slide>
      <Styled.Background url={backgroundUrl}>
        <Styled.Overlay>
          <Styled.Content>
            <Styled.StyledFlexDiv direction="column" align="flex-start">
              <h2>{title}</h2>
              <p>{description}</p>
            </Styled.StyledFlexDiv>
          </Styled.Content>
        </Styled.Overlay>
      </Styled.Background>
    </Styled.Slide>
  );
};

export default Slide;
