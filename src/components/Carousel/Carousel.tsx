import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import * as Styled from './Carousel.styled';
import Spinner from '../Spinner';
import CategoryCard from '../CategoryCard';

interface CarouselProps {
  title: string;
  elements: any;
  elementName: string;
  card: typeof CategoryCard;
  loading: boolean;
}
const Carousel: React.FC<CarouselProps> = ({
  title,
  elements,
  elementName,
  card: Card,
  loading,
}) => {
  const [translatePixels, setTranslatePixels] = useState(0);
  const divRef = useRef<HTMLDivElement>(null!);

  const totalElements = elements.results?.length || 0;
  const cardWitdh = 200;
  const cardMargin = 10;
  const CardDivWidth = cardWitdh + cardMargin * 2;
  const totalWidth = CardDivWidth * totalElements;

  const onLeft = () => {
    if (translatePixels + CardDivWidth <= 0) {
      setTranslatePixels((translatePixels) => translatePixels + CardDivWidth);
    }
  };

  const onRight = () => {
    if (
      translatePixels - CardDivWidth - divRef.current?.clientWidth >=
      -totalWidth - cardWitdh
    ) {
      setTranslatePixels((translatePixels) => translatePixels - CardDivWidth);
    }
  };

  const action = (
    <Styled.Controls>
      <Styled.Control
        onClick={onLeft}
        disabled={translatePixels === 0}
        shape="circle"
        icon={<FontAwesomeIcon icon={faChevronLeft} />}
      />
      <Styled.Control
        onClick={onRight}
        disabled={totalWidth < divRef.current?.clientWidth}
        shape="circle"
        icon={<FontAwesomeIcon icon={faChevronRight} />}
      />
    </Styled.Controls>
  );

  return (
    <Styled.Carousel title={title} action={action}>
      {loading ? (
        <Spinner />
      ) : (
        <div ref={divRef}>
          <Styled.Cards
            width={totalWidth}
            totalElements={totalElements}
            translatePixels={translatePixels}
          >
            {elements.results.map((element: any) => (
              <Card
                key={element.id}
                width={cardWitdh}
                margin={cardMargin}
                {...{ [elementName]: element }}
              />
            ))}
          </Styled.Cards>
        </div>
      )}
    </Styled.Carousel>
  );
};

export default Carousel;
