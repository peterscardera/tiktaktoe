import React from "react";
import styled from "styled-components";

const Square = ({ value, squareIndex, clickHandler }) => {
  return (
    <>
      <Container>
        <StyledButtons
          onClick={() => {
            clickHandler(squareIndex);
          }}
        >
          {value}
        </StyledButtons>
      </Container>
    </>
  );
};

export default Square;

const StyledButtons = styled.button`
  height: 100px;
  width: 100px;
  outline: none;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Indie Flower", cursive;
  cursor: pointer;

  background-color: transparent;

  &:hover {
    cursor: pointer;
    color: #666;
  }
  @media (max-width: 500px) {
    font-size: 2rem;
    height: 75px;
    width: 75px;
  }
`;

const Container = styled.div``;
