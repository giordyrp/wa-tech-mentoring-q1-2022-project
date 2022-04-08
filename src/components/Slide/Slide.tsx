import React from 'react';
import * as Styled from './Slide.styled';

interface SlideProps {
  banner: { data: any };
}

const Slide: React.FC<SlideProps> = ({ banner }) => {
  const {
    title,
    description: [{ text: description }],
    main_image: { url: backgroundUrl },
  } = banner.data;

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
