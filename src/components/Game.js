import React, { Component } from 'react';
import PeopleList from './PeopleList';
import { connect } from 'react-redux';
import { REQUEST_PEOPLE, makeSelection } from '../actions';
import PropTypes from 'prop-types';



class Game extends Component {
    componentDidMount() {
        if (this.props.people.length === 0) {
            this.props.onRequestPeople()
        }
    }

    render() {
        const { onHandleSelect, hand, target, isWon } = this.props;

        console.log(hand);

        return (
            <div>
                {hand.length && <h1>Whos is {target.firstName} {target.lastName}</h1>}
                <PeopleList hand={hand} handleSelect={onHandleSelect}/>
                {isWon && <h2>Great Job!</h2>}
            </div>
        );
    }
}

Game.propTypes = {
    hand: PropTypes.array,
    isWon: PropTypes.bool,
    onHandleSelect: PropTypes.func,
    onRequestPeople: PropTypes.func,
    people: PropTypes.array,
    target: PropTypes.object
};

function mapStateToProps(state) {
    const { people, hand, target, isWon } = state;

    return { people, hand, target, isWon };
}

function mapDispatchToProps(dispatch) {
    return {
        onRequestPeople: () => dispatch({ type: REQUEST_PEOPLE }),
        onHandleSelect: person => dispatch(makeSelection(person))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);