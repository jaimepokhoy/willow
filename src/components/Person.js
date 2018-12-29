import React from 'react';
import PropTypes from 'prop-types';
import { Col, Image } from 'react-bootstrap';
import KeyStroke from '../hocs/KeyStroke';
import Reveal from './Reveal';

const Person = ({ details, personSelect, index, showName }) => {
    const { clicked, firstName, lastName, headshot, visible } = details;

    const visibleClass = !visible ? 'invisible' : '';
    const fullName = `${firstName} ${lastName}`;

    return (
        <Col md={2}>
            <KeyStroke
                value={index}
                handler={personSelect}
            />
            <div onClick={personSelect} className={visibleClass}>
                {showName ? <h3>{fullName}</h3> : <Image src={headshot.url || 'avatar.png'} rounded responsive />
                }
                {clicked && 
                    <Reveal person={details} showName={showName} />
                }
            </div>
        </Col>
    );
}

Person.propTypes = {
    details: PropTypes.object,
    index: PropTypes.string,
    personSelect: PropTypes.func,
    showName: PropTypes.bool
}

export default Person;