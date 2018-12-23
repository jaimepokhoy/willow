import React from 'react';
import PropTypes from 'prop-types';
import Person from './Person';

const PeopleList = ({ hand }) => {
    const listItems = hand.map(person => (
        <Person key={person.id} details={person} />
    ));
    
    return (
        <div>
            {listItems}
        </div>
    );
}

PeopleList.propTypes = {
    hand: PropTypes.array
}

export default PeopleList;