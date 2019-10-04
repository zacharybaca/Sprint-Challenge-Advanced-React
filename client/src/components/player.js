import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;

`


const Player = (props) => (
    <Div>
    <li>
        <h2>Name</h2>
        {props.players.name}
        <br />
        <h2>Country</h2>
        {props.players.country}
    </li>
    </Div>
)

export default Player;