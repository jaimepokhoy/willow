import React from 'react';
import PropTypes from 'prop-types';
import KeyHandler, { KEYPRESS } from 'react-key-handler';

const KeyStroke = ({ value, handler }) => (
    <KeyHandler
        keyEventName={KEYPRESS}
        keyValue={value}
        onKeyHandle={handler}
    />
);

KeyStroke.propTypes = {
    handler: PropTypes.func,
    value: PropTypes.string
}

export default KeyStroke;