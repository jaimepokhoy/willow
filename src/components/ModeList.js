import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const ModeList = ({ gameMode, gameModes, handleSelect }) => {

    const listItems = gameModes.map(mode => (
        <ListGroupItem key={mode} active={gameMode === mode ? true : false} onClick={() => handleSelect(mode)}>
            {mode}
        </ListGroupItem>
    ));

    return (
        <ListGroup>
            {listItems}
        </ListGroup>
    );
}

ModeList.propTypes = {
    handleSelect: PropTypes.func,
    gameMode: PropTypes.string,
    gameModes: PropTypes.array,
}

export default ModeList;