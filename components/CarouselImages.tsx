import React from 'react';
import '@brainhubeu/react-carousel/lib/style.css';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { autoplayPlugin } from '@brainhubeu/react-carousel';
const Carousel = dynamic(() => import('@brainhubeu/react-carousel'), {
  ssr: false,
});

const CarouselStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const CarouselImages = () => {
  return (
    <CarouselStyles>
      <Carousel
        plugins={[
          'infinite',
          {
            resolve: autoplayPlugin,
            options: {
              interval: 2000,
            },
          },
        ]}
        animationSpeed={1000}
      >
        <img src='/j04.png' style={{ width: 300, height: 500 }} />
        <img src='/j06.png' style={{ width: 300, height: 500 }} />
        <img src='/s20.png' style={{ width: 300, height: 500 }} />
      </Carousel>
    </CarouselStyles>
  );
};
