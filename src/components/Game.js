import React, { Component } from 'react';
import PeopleList from './PeopleList';
import { connect } from 'react-redux';
import { REQUEST_PEOPLE } from '../actions';
import PropTypes from 'prop-types';
import shuffle from 'lodash/shuffle';
import random from 'lodash/random';


class Game extends Component {
    componentDidMount() {
        if (this.props.people.length === 0) {
            this.props.onRequestPeople()
        }
    }

    render() {
        const { people } = this.props;
        let target;
        let targetName;

        const hand = shuffle(people.slice(0, 5));
        if (hand.length) {
            target = hand[random(4)];
            targetName = `${target.firstName} ${target.lastName}`;
        }


        return (
            <div>
                {hand && <h1>Who is {targetName}</h1>}
                <PeopleList hand={hand} />
            </div>
        );
    }
}

Game.propTypes = {
    onRequestPeople: PropTypes.func,
    people: PropTypes.array
};

function mapStateToProps(state) {
    const { people } = state;

    return { people };
}

function mapDispatchToProps(dispatch) {
    return {
        onRequestPeople: () => dispatch({ type: REQUEST_PEOPLE })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);