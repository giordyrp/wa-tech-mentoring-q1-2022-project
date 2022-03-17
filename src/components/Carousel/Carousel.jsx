import React, { useState, useRef } from 'react';
import * as Styled from './Carousel.styled';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../Spinner';

const Carousel = ({ title, elements, elementName, card: Card, loading }) => {
  const [translatePixels, setTranslatePixels] = useState(0);
  const divRef = useRef(null);

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
    if (translatePixels - CardDivWidth - divRef.current.clientWidth >= -totalWidth - cardWitdh) {
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
            {elements.results.map((element) => (
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

Carousel.propTypes = {
  title: PropTypes.string.isRequired,
  elements: PropTypes.object.isRequired,
  elementName: PropTypes.string.isRequired,
  card: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Carousel;
