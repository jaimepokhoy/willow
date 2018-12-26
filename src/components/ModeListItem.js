import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, OverlayTrigger, Tooltip } from 'react-bootstrap';

const ModeListItem = ({ active, onItemSelect, mode }) => {
    const tooltip = (
        <Tooltip id={mode.name}>
            {mode.desc}
        </Tooltip>
    )

    return (
        <OverlayTrigger key={mode.name} placement="left" overlay={tooltip}>
            <ListGroupItem active={active ? true : false} onClick={() => onItemSelect(mode)}>
                {mode.name}
            </ListGroupItem>
        </OverlayTrigger>
    );
}

ModeListItem.propTypes = {
    active: PropTypes.bool,
    mode: PropTypes.object,
    onItemSelect: PropTypes.func
}

export default ModeListItem;