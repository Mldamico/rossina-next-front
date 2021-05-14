import React, { useEffect, useState } from 'react';
import { useProductByIdQuery } from '../../types/generated-queries';
import { ProductDetailStyles } from './styles/ProductDetailStyles';

export const ProductDetail = ({ productId }: { productId: string }) => {
  const [selectedImage, setSelectedImage] =
    useState<undefined | string>(undefined);
  const { data, error, loading } = useProductByIdQuery({
    variables: { id: productId },
  });
  if (loading) return <p>Cargando...</p>;
  const { Product: product } = data;
  // useEffect(() => {
  //   setSelectedImage(product?.imagen[0]?.image.publicUrlTransformed);
  // }, []);

  const changeSelectedImage = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <ProductDetailStyles>
      <div className='image-container'>
        <div className='images-small'>
          {product.imagen.map((img) => (
            <img
              key={img.id}
              src={img.image.publicUrlTransformed}
              alt={product.nombre}
              className='img-caption'
              onClick={() =>
                changeSelectedImage(img.image.publicUrlTransformed)
              }
            />
          ))}
        </div>
        <div>
          <img
            src={
              !!selectedImage
                ? selectedImage
                : product?.imagen[0]?.image.publicUrlTransformed
            }
            alt={product?.nombre}
          />
        </div>
      </div>

      <div className='details'>
        <h2>{product?.nombre}</h2>
        <p>{product?.descripcion}</p>
      </div>
    </ProductDetailStyles>
  );
};
