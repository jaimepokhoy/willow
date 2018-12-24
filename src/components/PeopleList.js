import React from 'react';
import PropTypes from 'prop-types';
import Person from './Person';
import { Grid, Row } from 'react-bootstrap';

const PeopleList = ({ hand, handleSelect }) => {
    const listItems = hand.map(person => (
        <Person key={person.id} details={person} personSelect={() => handleSelect(person)}/>
    ));
    
    return (
        <Grid>
            <Row>
                {listItems}
            </Row>
        </Grid>
    );
}

PeopleList.propTypes = {
    hand: PropTypes.array,
    handleSelect: PropTypes.func
}

export default PeopleList;