import React, { Component } from 'react';
import PeopleList from './PeopleList';
import { connect } from 'react-redux';
import { GET_PEOPLE } from '../actions';

class Game extends Component {
    componentDidMount() {
        if (this.props.people.length === 0) {
            this.props.onRequestPeople()
        }
    }

    render() {
        return (
            <PeopleList />
        );
    }
}

function mapStateToProps(state) {
    const { people } = state;

    return { people };
}

function mapDispatchToProps(dispatch) {
    return {
        onRequestPeople: () => dispatch({ type: GET_PEOPLE })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);