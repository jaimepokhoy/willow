import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ModeList from './components/ModeList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Game from './components/Game';
import { modeChange } from './actions';
import ScoreBoard from './components/ScoreBoard';

class App extends Component {
  render() {
    const { gameMode, gameModes, onModeChange, numberCorrect, numberIncorrect } = this.props;

    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={4} md={2}>
            <h3>Name Game</h3>
            <ModeList gameMode={gameMode} gameModes={gameModes} handleSelect={onModeChange} />
            <ScoreBoard correct={numberCorrect} incorrect={numberIncorrect} />
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
  numberCorrect: PropTypes.number,
  numberIncorrect: PropTypes.number,
  onModeChange: PropTypes.func
};

function mapStateToProps(state) {
  const { gameMode, gameModes, numberCorrect, numberIncorrect } = state;

  return { gameMode, gameModes, numberCorrect, numberIncorrect };
}

function mapDispatchToProps(dispatch) {
  return {
    onModeChange: mode => dispatch(modeChange(mode.name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
