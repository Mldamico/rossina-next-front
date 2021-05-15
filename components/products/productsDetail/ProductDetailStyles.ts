import styled from 'styled-components';
export const ProductDetailStyles = styled.section`
  display: grid;
  grid-template-columns: 1fr minmax(300px, 1fr);
  justify-content: baseline;
  max-width: var(--maxWidth);
  align-content: center;
  margin: auto;

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* align-items: center; */
    height: 100%;
  }

  h2 {
    align-self: center;
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  h3,
  p {
    align-self: flex-start;
    margin: 1rem 0;
    font-family: 'Old Standard TT', serif;
  }
  p {
    font-size: 1.7rem;
    color: var(--grey);
  }

  button {
    padding: 1rem 1rem;
    margin-top: 10rem;
    align-self: flex-end;
    border: none;
    border-radius: 1rem;
    background-color: var(--red);
    color: #fff;
    font-size: 1.6rem;
  }

  select {
    padding: 0.5rem;
    border-radius: 1rem;
    margin: 0 2rem;
    outline: none;
    width: 15rem;
  }

  option {
    text-align: center;
  }

  .thumbnails-image {
    object-fit: contain;
    height: 10rem;
    width: 10rem;
  }
  .carousel-button {
    background-color: #fff;
    color: var(--red);
    border: none;
  }
  .carousel-button:disabled {
    color: #ccc;
  }

  .carousel-image {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .image-container {
    width: 45rem;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    margin: 5rem;
    justify-items: center;
    button {
      align-self: center;
    }
  }

  @media (max-width: 500px) {
    margin: 5rem 0;
    grid-template-columns: 1fr;
    img {
      height: 30rem;
      width: 20rem;
      object-fit: contain;
    }

    .image-container {
      grid-template-columns: 1fr;
    }
  }
`;

export const ProductsDetailContainerStyles = styled.div`
  .path {
    margin-top: 5rem;
    margin-left: 7rem;
  }
  .button-back {
    background-color: #fff;
    outline: none;
    border: none;
    font-size: 1.6rem;
    cursor: pointer;
  }
`;
