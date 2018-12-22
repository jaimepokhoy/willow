import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class ModeList extends Component {
    render() {
        return (
            <ListGroup>
                <ListGroupItem>Classic</ListGroupItem>
                <ListGroupItem>Hint</ListGroupItem>
            </ListGroup>
        );
    }
}

export default ModeList;