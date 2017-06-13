import React, { Component } from 'react';
import classNames from 'classnames';
import './LoginImageCapture.css';

class LoginImageCapture extends Component {
    componentDidMount() {
        let video = document.getElementsByClassName('capture-frame')[0],
            canvas = document.getElementsByClassName('image-display')[0],
            captureButton = document.getElementById("capture-button"),
            rejectButton = document.getElementById("reject-button"),
            flipper = document.getElementsByClassName("flipper")[0],
            ctx = canvas.getContext('2d'),
            localMediaStream = null;
        function snapshot() {
            if (localMediaStream) {
                ctx.drawImage(video, 0, 0, 240, 180);
                flipper.className += " flip";
            }
        }

        captureButton.addEventListener('click', snapshot, false);
        rejectButton.addEventListener('click', () => {flipper.className = "flipper";}, false);
        navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
            video.src = window.URL.createObjectURL(stream);
            localMediaStream = stream;
        });
    }

    render() {
        return (
            <div className="flip-container">
                <div className="flipper">
                    <div className="front">
                        <video className="capture-frame" autoPlay={true}></video>
                        <div className="capture-actions">
                            <button id="capture-button" className="button button-small">CAPTURE</button>
                        </div>
                    </div>
                    <div className="back">
                        <canvas className="image-display"></canvas>
                        <div className="capture-actions">
                            <button id="reject-button" className="button button-small button-reject">DISCARD</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginImageCapture