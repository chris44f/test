import React from 'react';

const Individual = props => {
    return(
        <div>
            <p>{props.text}</p>
            <p>{props.category}</p>
            <p>{props.user}</p>
            <p>{props.timestamp}</p>
        </div>
    )
}

export default Individual