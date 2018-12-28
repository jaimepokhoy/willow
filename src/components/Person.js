import React from 'react';
import PropTypes from 'prop-types';
import { Col, Image } from 'react-bootstrap';
import KeyHandler, { KEYPRESS } from 'react-key-handler';

const Person = ({ details, personSelect, index }) => {
    const { clicked, firstName, lastName, headshot, isTarget, visible } = details;

    const colorClass = clicked && isTarget ? 'green' : 'red';
    const visibleClass = !visible ? 'invisible' : '';

    return (
        <Col md={2}>
            <KeyHandler
                keyEventName={KEYPRESS}
                keyValue={index}
                onKeyHandle={personSelect}
            />
            <div onClick={personSelect} className={visibleClass}>
                <Image src={headshot.url || 'avatar.png'} rounded responsive />
                {clicked && 
                    <h4 className={colorClass}>{firstName} {lastName}</h4>
                }
            </div>
        </Col>
    );
}

Person.propTypes = {
    details: PropTypes.object,
    index: PropTypes.string,
    personSelect: PropTypes.func
}

export default Person;