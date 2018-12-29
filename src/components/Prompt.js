import React from 'react';
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Prompt = ({ target, gameMode }) => {
    const { firstName, lastName, headshot } = target;

    return (
        <div className='center'>
        <h1>Who is</h1>
            {gameMode === 'Reversed' ? <div><Image src={headshot.url} rounded thumbnail responsive /></div> :
            <h1>{`${firstName} ${lastName}`}</h1>}
        </div>
    )
}

Prompt.propTypes = {
    gameMode: PropTypes.string,
    target: PropTypes.object
}

export default Prompt

