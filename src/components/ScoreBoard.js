import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const ScoreBoard = ({ correct, incorrect }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Correct</th>
                    <th>Incorrect</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{correct}</td>
                    <td>{incorrect}</td>
                </tr>
            </tbody>
        </Table>
    );
}

ScoreBoard.propTypes = {
    correct: PropTypes.number,
    incorrect: PropTypes.number,
}

export default ScoreBoard;