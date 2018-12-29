import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Person from './Person';
import { Grid, Row } from 'react-bootstrap';
import ReactTimeout from 'react-timeout';
import { connect } from 'react-redux';
import { giveHint } from '../actions';

class PeopleList extends Component {
    componentDidMount() {
        this.props.setInterval(this.props.onGiveHint, 5000);
    }
    
    render() {
        const { hand, handleSelect, gameMode } = this.props;

        const listItems = hand.map((person, index) => (
            <Person
                key={person.id}
                showName={gameMode === 'Reversed'}
                index={`${index + 1}`}
                details={person}
                personSelect={() => handleSelect(person)}
            />
        ));
        
        return (
            <Grid>
                <Row>
                    {listItems}
                </Row>
            </Grid>
        );
    }
}

PeopleList.propTypes = {
    gameMode: PropTypes.string,
    hand: PropTypes.array,
    handleSelect: PropTypes.func,
    onGiveHint: PropTypes.func,
    setInterval: PropTypes.func
}

function mapDispatchToProps(dispatch) {
    return {
        onGiveHint: () => dispatch(giveHint()),
    };
}

export default ReactTimeout(connect(() => ({}), mapDispatchToProps)(PeopleList));