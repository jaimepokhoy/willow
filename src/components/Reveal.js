import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

const Reveal = ({ person, showName }) => {
    const { clicked, firstName, lastName, headshot, isTarget } = person;

    const colorClass = clicked && isTarget ? 'green' : 'red';
    const fullName = `${firstName} ${lastName}`;

    return (
        <div>
            {showName ? <Image src={headshot.url || 'avatar.png'} rounded responsive /> : <h4 className={colorClass}>{fullName}</h4>}
        </div>
    );
}

Reveal.propTypes = {
    person: PropTypes.object,
    showName: PropTypes.bool
}

export default Reveal;