import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ModeList from './components/ModeList';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={4} md={2}>
            <h3>Name Game</h3>
            <ModeList />
          </Col>
          <Col xs={14} md={10}>
            <Game />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
