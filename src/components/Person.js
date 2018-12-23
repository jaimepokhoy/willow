import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ details }) => {
    return (
        <div>{details.firstName}</div>
    );
}

Person.propTypes = {
    details: PropTypes.object
}

export default Person;