import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ModeList from './components/ModeList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Game from './components/Game';
import { modeChange } from './actions';

class App extends Component {
  render() {
    const { gameMode, gameModes, onModeChange } = this.props;

    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={4} md={2}>
            <h3>Name Game</h3>
            <ModeList gameMode={gameMode} gameModes={gameModes} handleSelect={onModeChange} />
          </Col>
          <Col xs={14} md={10}>
            <Game />
          </Col>
        </Row>
      </Grid>
    );
  }
}

App.propTypes = {
  gameMode: PropTypes.string,
  gameModes: PropTypes.array,
  onModeChange: PropTypes.func
};

function mapStateToProps(state) {
  const { gameMode, gameModes } = state;

  return { gameMode, gameModes };
}

function mapDispatchToProps(dispatch) {
  return {
    onModeChange: mode => dispatch(modeChange(mode.name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
