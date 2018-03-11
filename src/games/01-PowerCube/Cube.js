import React from 'react';
import L from './assets/cube-L.png';
import I from './assets/cube-I.png';

class Cube extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rotation: props.rotation,
    };
  }
  
  onCubeClick = () => {
    const { rotation } = this.state;
    this.setState({
      rotation: (rotation === 3) ? 0 : rotation + 1,
    });
  };
  
  render() {
    const { shape } = this.props;
    const { rotation } = this.state;
    
    return (
      <div 
        className="cube"
        onClick={this.onCubeClick}
      >
        <div 
          className="cube-wrapper"
          style={{
            transform: `rotateZ(${rotation * 90}deg)`
          }}
        >
          <img src={shape === 'L' ? L : I} className="cube-image" />
        </div>
      </div>
    );
  }
}

export default Cube;
