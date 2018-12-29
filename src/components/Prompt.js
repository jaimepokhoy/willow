import React from 'react';
import { Image } from 'react-bootstrap';

const Prompt = ({ target, gameMode }) => {
    const { firstName, lastName, headshot } = target;

    return (
        <div className='center'>
        <h1>Who is
            {gameMode === 'Reversed' ? <div><Image src={headshot.url} rounded thumbnail /></div> :
            <h1>{`${firstName} ${lastName}`}</h1>}
        </h1>
        </div>
    )
}

export default Prompt

