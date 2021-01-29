import React from 'react';

const PersonCard = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    );
}

export default PersonCard;