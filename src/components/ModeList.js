import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class ModeList extends Component {
    render() {
        return (
            <ListGroup>
                <ListGroupItem>Classic</ListGroupItem>
                <ListGroupItem>Team</ListGroupItem>
                <ListGroupItem>Mat*</ListGroupItem>
                <ListGroupItem>Hint</ListGroupItem>
            </ListGroup>
        );
    }
}

export default ModeList;