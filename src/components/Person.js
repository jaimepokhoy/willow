import React from 'react';
import PropTypes from 'prop-types';
import { Col, Image } from 'react-bootstrap';
import './Person.css';

const Person = ({ details, personSelect }) => {
    return (
        <Col md={2}>
            <div onClick={personSelect} className={(details.clicked ? 'red' : '')}>
                <Image src={details.headshot.url} rounded responsive />
                {details.firstName}
            </div>
        </Col>
    );
}

Person.propTypes = {
    details: PropTypes.object,
    personSelect: PropTypes.func
}

export default Person;