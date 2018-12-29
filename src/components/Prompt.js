import React from 'react';
import { Image, PageHeader } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Prompt = ({ target, gameMode }) => {
    const { firstName, lastName, headshot } = target;
    const fullName = `${firstName} ${lastName}`;

    return (
        <PageHeader>
            Who is 
            {gameMode === 'Reversed' ? <div><Image src={headshot.url} rounded thumbnail responsive /></div> :
            <div><h2 className='blue'>{fullName}</h2></div>}
        </PageHeader>
    )
}

Prompt.propTypes = {
    gameMode: PropTypes.string,
    target: PropTypes.object
}

export default Prompt

