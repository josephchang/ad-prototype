import React from 'react';
import Cube from './Cube';
import SourceCube from './SourceCube';
import './styles.css';

class PowerCube extends React.Component {
  render() {
    return (
      <div className="powerCube">
        <div className="powerCube_row">
          <Cube shape="L" rotation={2} />
          <Cube shape="L" rotation={0} />
          <Cube shape="I" rotation={1} />
        </div>
        <div className="powerCube_row">
          <Cube shape="I" rotation={0} />
          <SourceCube pos="top" />
          <Cube shape="L" rotation={3} />
        </div>
        <div className="powerCube_row">
          <Cube shape="L" rotation={2} />
          <Cube shape="I" rotation={0} />
          <Cube shape="L" rotation={0} />
        </div>
        <div className="powerCube_row">
          <Cube shape="I" rotation={2} />
          <Cube shape="L" rotation={2} />
          <Cube shape="I" rotation={0} />
        </div>
        <div className="powerCube_row">
          <Cube shape="L" rotation={1} />
          <SourceCube pos="bottom" />
          <Cube shape="I" rotation={1} />
        </div>
        <div className="powerCube_row">
          <Cube shape="I" rotation={3} />
          <Cube shape="L" rotation={1} />
          <Cube shape="L" rotation={3} />
        </div>
      </div>
    );
  }
}

export default PowerCube;
