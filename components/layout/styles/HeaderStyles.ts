import styled from 'styled-components';

export const HeaderStyles = styled.header`
  background-color: var(--red);
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
  font-size: 1.2rem;

  .header-section {
    display: grid;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: 1fr auto 1fr;
  }

  button {
    border: none;
    background-color: var(--red);
    cursor: pointer;
    font-size: 1.2rem;
    color: #fff;
  }

  .header-section-left,
  .header-section-right {
    display: flex;
    margin: 0 5rem;
    align-items: center;
  }

  .header-section-right {
    justify-content: flex-end;
  }
  .header-section-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
  }

  h1 {
    margin: 0;
    font-size: 6rem;
    font-family: 'Oregano', cursive;
    text-align: center;
  }

  -webkit-box-shadow: 2px 1px 2px 2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 1px 2px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 1px 2px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 800px) {
    font-size: 1rem;

    h1 {
      font-size: 4rem;
    }
    .header-section-left,
    .header-section-right {
      display: flex;
      margin: 0rem;
      align-items: center;
    }
  }
  @media (max-width: 500px) {
    font-size: 1rem;

    h1 {
      font-size: 3rem;
    }
    .header-section-left,
    .header-section-right {
      flex-direction: column;
      margin-top: 1rem;
    }
    .header-section-item {
      padding: 0.5rem;
      text-align: center;
    }
  }
`;
