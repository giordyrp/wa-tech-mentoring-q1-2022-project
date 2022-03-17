import React, { useEffect, useState } from 'react';
import Slide from '../Slide';
import * as Styled from './Slider.styled';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';

const Slider = ({ banners, loading }) => {
  const [index, setIndex] = useState(0);
  const totalBanners = banners.results?.length || 0;

  useEffect(() => {
    const interval = setInterval(() => setIndex((index) => (index + 1) % totalBanners), 5000);
    return () => clearInterval(interval);
  }, [totalBanners]);

  const controlList = [];
  for (let i = 0; i < totalBanners; i++) {
    controlList.push(<button key={i} onClick={() => setIndex(i)} />);
  }

  return (
    <Styled.Slider>
      {loading ? (
        <Spinner />
      ) : (
        banners.results.length > 0 && (
          <>
            <Slide banner={banners.results[index]} />
            <Styled.Controls index={index}>{controlList}</Styled.Controls>
          </>
        )
      )}
    </Styled.Slider>
  );
};

Slider.propTypes = {
  banners: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Slider;
