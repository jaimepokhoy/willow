import React from 'react';
import PropTypes from 'prop-types';
import { Col, Image } from 'react-bootstrap';

const Person = ({ details }) => {
    return (
        <Col md={2}>
            <Image src={details.headshot.url} rounded responsive />
            {details.firstName}
        </Col>
    );
}

Person.propTypes = {
    details: PropTypes.object
}

export default Person;