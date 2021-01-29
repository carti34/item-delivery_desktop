import React from 'react';
import * as SC from './styles.js';

const PersonCard = (props) => {
    return (
        <div>
            <SC.Title>{props.name}</SC.Title>
            <p>{props.email}</p>
        </div>
    );
}

export default PersonCard;