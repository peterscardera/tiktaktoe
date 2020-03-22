import React from "react";
import styled from "styled-components";
import { StatusContext } from "./StatusContext";

const PlayerTurn = () => {

    const { bool } = React.useContext(StatusContext)


    return (
        <>
        <StyledDiv>Player {bool}'s turn</StyledDiv>
        </>
    )


}


export default PlayerTurn

const StyledDiv = styled.div`
margin-top: 1rem;
font-family: 'Baloo Da 2', cursive;
font-size: 2.6rem;


`