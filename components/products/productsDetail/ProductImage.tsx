import React, { useState } from 'react';
import '@brainhubeu/react-carousel/lib/style.css';
import dynamic from 'next/dynamic';
import { Dots, arrowsPlugin } from '@brainhubeu/react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { Product as productType } from '../../../types/generated-queries';
const Carousel = dynamic(() => import('@brainhubeu/react-carousel'), {
  ssr: false,
});
type ProductProps = { product: productType };
export const ProductImage = ({ product }: ProductProps) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const onChange = (value) => {
    setSelectedImage(value);
  };
  return (
    <div className='image-container'>
      <Carousel
        plugins={[
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: (
                <button className='carousel-button'>
                  <FontAwesomeIcon icon={faChevronCircleLeft} size='3x' />
                </button>
              ),
              arrowLeftDisabled: (
                <button disabled={true} className='carousel-button'>
                  <FontAwesomeIcon icon={faChevronCircleLeft} size='3x' />
                </button>
              ),
              arrowRight: (
                <button className='carousel-button'>
                  <FontAwesomeIcon icon={faChevronCircleRight} size='3x' />
                </button>
              ),
              arrowRightDisabled: (
                <button disabled={true} className='carousel-button'>
                  <FontAwesomeIcon icon={faChevronCircleRight} size='3x' />
                </button>
              ),
              addArrowClickHandler: true,
            },
          },
        ]}
        value={selectedImage}
        onChange={onChange}
      >
        {product?.imagen?.map((img) => (
          <img
            className='carousel-image'
            src={img.image.publicUrlTransformed}
            alt={product.nombre}
            key={img.id}
          />
        ))}
      </Carousel>
      {product?.imagen?.length > 1 && (
        <Dots
          value={selectedImage}
          onChange={onChange}
          thumbnails={[
            ...product.imagen.map((img, index) => (
              <img
                className='thumbnails-image'
                src={img.image.publicUrlTransformed}
                alt={product.nombre}
                key={index}
              />
            )),
          ]}
        />
      )}
    </div>
  );
};
