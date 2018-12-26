import React from 'react';
import PropTypes from 'prop-types';
import ModeListItem from './ModeListItem';
import { ListGroup } from 'react-bootstrap';

const ModeList = ({ gameMode, gameModes, handleSelect }) => {
    const listItems = gameModes.map(mode => (
        <ModeListItem key={mode.name} active={gameMode === mode.name ? true : false} onItemSelect={() => handleSelect(mode)} mode={mode}>
            {mode.name}
        </ModeListItem>
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