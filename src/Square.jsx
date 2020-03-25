import React from "react";
import styled from "styled-components";

const Square = ({ value, squareIndex, clickHandler }) => {
  console.log(squareIndex);
  return (
    <>
      <Container>
        <StyledButtons
          className={`btn${squareIndex}`}
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
  border: solid black 1px;
  background-color: transparent;

  /* ${props => {
    console.log(props);
  }} */

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
