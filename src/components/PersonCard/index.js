import React from 'react';
import { Name, Email, Container } from './styles';

const PersonCard = (props) => {
    return (
        <Container>
            <Name>{props.name}</Name>
            <Email>{props.email}</Email>
        </Container>
    );
}

export default PersonCard;
