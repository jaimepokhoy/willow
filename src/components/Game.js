import React, { Component } from 'react';
import PeopleList from './PeopleList';
import Winner from './Winner';
import { connect } from 'react-redux';
import { REQUEST_PEOPLE, makeSelection, nextRound } from '../actions';
import PropTypes from 'prop-types';
import './../App.css';
import Loader from '../hocs/Loader';



class Game extends Component {
    componentDidMount() {
        const { people, onRequestPeople } = this.props;

        if (people.length === 0) {
            onRequestPeople()
        }
    }

    render() {
        const { onHandleSelect, hand, loading, target, isWon, onNextRound } = this.props;

        return (
            <div>
                {hand.length && <h1>Who is {target.firstName} {target.lastName}</h1>}
                {loading ? (
                    <Loader loading={loading} />
                ) : (
                    <PeopleList hand={hand} handleSelect={onHandleSelect} />
                )}
                {isWon && <Winner handleNext={onNextRound} />}
            </div>
        );
    }
}

Game.propTypes = {
    hand: PropTypes.array,
    isWon: PropTypes.bool,
    loading: PropTypes.bool,
    onHandleSelect: PropTypes.func,
    onNextRound: PropTypes.func,
    onRequestPeople: PropTypes.func,
    people: PropTypes.array,
    target: PropTypes.object
};

function mapStateToProps(state) {
    const { people, hand, target, isWon, loading } = state;

    return { people, hand, target, isWon, loading };
}

function mapDispatchToProps(dispatch) {
    return {
        onNextRound: () => dispatch(nextRound()),
        onRequestPeople: () => dispatch({ type: REQUEST_PEOPLE }),
        onHandleSelect: person => dispatch(makeSelection(person))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);