import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;

`

const CardDiv = styled.div`
    border: 2px solid black;
    width: 500px;
    background-color: green;
`


const Player = (props) => (
    
    <Div>
        <CardDiv>
            <h2>Player Name</h2>
            <h4>{props.players.name}</h4>
            <br />
            <h2>Country</h2>
            <h4>{props.players.country}</h4>
        </CardDiv>
    
    </Div>
    
)


export default Player;