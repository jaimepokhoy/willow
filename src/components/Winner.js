import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Person = ({ handleNext }) => {
    return (
        <div>
            <h1>Great job!</h1>
            <Button bsStyle="primary" bsSize="large" onClick={handleNext}>
                Next Round
            </Button>
        </div>
    );
}

Person.propTypes = {
    handleNext: PropTypes.func
}

export default Person;