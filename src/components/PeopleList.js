import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Person from './Person';
import { Grid, Row } from 'react-bootstrap';
import ReactTimeout from 'react-timeout';
import { connect } from 'react-redux';
import { giveHint } from '../actions';

class PeopleList extends Component {
    componentDidMount() {
        this.props.setInterval(this.props.onGiveHint, 10000);
    }
    
    render() {
        const { hand, handleSelect } = this.props;

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
}

PeopleList.propTypes = {
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