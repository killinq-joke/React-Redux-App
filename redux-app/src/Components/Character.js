import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
padding: 2px;
`

export default function Character({name, image}) {
    return(
        <Card>
            <h3>{name}</h3>
            <img src={image}/>
        </Card>
    )
}