import React from 'react';
import topSourceImage from './assets/source-top.png';
import bottomSourceImage from './assets/source-bottom.png';

class SourceCube extends React.Component {
  render() {
    const { pos } = this.props;
    return (
      <div className="cube">
        <img src={pos === 'top' ? topSourceImage : bottomSourceImage} className="cube-image" />
      </div>
    );
  }
}

export default SourceCube;
