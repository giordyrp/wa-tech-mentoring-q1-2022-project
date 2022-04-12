import React, { useEffect, useState } from 'react';
import Slide from '../Slide';
import * as Styled from './Slider.styled';
import Spinner from '../Spinner';

interface SliderProps {
  banners: any;
  loading: boolean;
}

const Slider: React.FC<SliderProps> = ({ banners, loading }) => {
  const [index, setIndex] = useState(0);
  const totalBanners = banners.length || 0;

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((index) => (index + 1) % totalBanners),
      5000
    );
    return () => clearInterval(interval);
  }, [totalBanners]);

  const controlList = [];
  for (let i = 0; i < totalBanners; i++) {
    controlList.push(
      <button type="button" aria-label="dot" key={i} onClick={() => setIndex(i)} />
    );
  }

  return (
    <Styled.Slider>
      {loading ? (
        <Spinner />
      ) : (
        banners.length > 0 && (
          <>
            <Slide banner={banners[index]} />
            <Styled.Controls index={index}>{controlList}</Styled.Controls>
          </>
        )
      )}
    </Styled.Slider>
  );
};

export default Slider;
