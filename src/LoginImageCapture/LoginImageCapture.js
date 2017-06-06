import React, { Component } from 'react'
import classNames from 'classnames';
import './LoginImageCapture.css';

class LoginImageCapture extends Component {
  constructor() {
    super();
    this.state = {
      captured: false
    }
  }

  _startVideo() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => this._startVideoSuccess(stream));
  }

  _startVideoSuccess(stream) {
    this.player.srcObject = stream;
    this.videoTracks = stream.getVideoTracks();
  }

  _stopVideo() {
    this.videoTracks.forEach(track => track.stop());
  }

  captureImage() {
    var context = this.canvas.getContext('2d');
    context.drawImage(this.player, 0, 0, 220, 220);
    this.setState({
      captured: true
    });
    this.props.onCapture(this.canvas.toDataURL());
  }

  discardImage() {
    this.setState({
      captured: false
    });
  }

  componentWillUnmount() {
    this._stopVideo();
  }


  componentDidMount() {
    this._startVideo()
  }

  render() {
    const flipClass = classNames('flipper', {
      flip: this.state.captured
    });

    return (
      <div>
        <div className="flip-container">
          <div className={flipClass}>
            <div className="front">
              <video className="capture-frame" autoPlay ref={el => { this.player = el }} />
              <div className="capture-actions">
                <button className="button button-small" onClick={this.captureImage.bind(this)}>CAPTURE</button>
              </div>
            </div>
            <div className="back">
              <canvas className="capture-frame" width="220" height="220" ref={el => { this.canvas = el }} />
              <div className="capture-actions">
                <button className="button button-small button-reject" onClick={this.discardImage.bind(this)}>DISCARD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginImageCapture