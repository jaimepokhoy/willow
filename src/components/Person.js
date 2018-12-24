import React from 'react';
import PropTypes from 'prop-types';
import { Col, Image } from 'react-bootstrap';

const Person = ({ details, personSelect }) => {
    const { clicked, firstName, lastName, headshot, isTarget } = details;

    return (
        <Col md={2}>
            <div onClick={personSelect} className={(clicked && isTarget ? 'green' : 'red')}>
                <Image src={headshot.url} rounded responsive />
                {clicked && 
                    <h4>{firstName} {lastName}</h4>
                }
            </div>
        </Col>
    );
}

Person.propTypes = {
    details: PropTypes.object,
    personSelect: PropTypes.func
}

export default Person;