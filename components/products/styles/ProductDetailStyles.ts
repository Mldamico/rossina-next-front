import styled from 'styled-components';
export const ProductDetailStyles = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-items: center;
  /* min-height: 1000px; */
  max-width: var(--maxWidth);
  align-items: top;
  margin: 5rem 20rem;
  img {
    width: 100%;
    height: 100%;
    /* object-fit: contain; */
  }

  .images-small {
    display: flex;
    flex-direction: column;
    justify-self: end;
    align-self: start;
    gap: 1rem;
  }

  .img-caption {
    height: 100px;
    width: 100px;
    object-fit: contain;
    cursor: pointer;
  }

  .image-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem;
  }
  @media (max-width: 800px) {
    margin: 5rem;
  }

  @media (max-width: 500px) {
    margin: 5rem 0;
    grid-template-columns: 1fr;
    img {
      height: 30rem;
      width: 20rem;
      object-fit: contain;
    }
    .images-small {
      flex-direction: row;
      justify-self: start;
      gap: 0;
    }
    .img-caption {
      height: 50px;
      width: 50px;
    }
    .image-container {
      grid-template-columns: 1fr;
    }
  }
`;
