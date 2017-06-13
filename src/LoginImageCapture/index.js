import React, { Component } from 'react';
import classNames from 'classnames';
import './LoginImageCapture.css';

class LoginImageCapture extends Component {
    componentDidMount() {
        let video = document.getElementsByClassName('capture-frame');
        // let canvas = document.querySelector('canvas');
        // let ctx = canvas.getContext('2d');
        let localMediaStream = null;
        let errorCallback = () => {
            alert("Not able to connect");
        };
        // function snapshot() {
        //     if (localMediaStream) {
        //         ctx.drawImage(video, 0, 0);
        //     }
        // }
        //
        // video.addEventListener('click', snapshot, false);
        navigator.getUserMedia({video: true}, function(stream) {
            video.src = window.URL.createObjectURL(stream);
            localMediaStream = stream;
        }, errorCallback);
    }

    render() {
        return (
            <div className="capture">
                <div className="side1">
                    <video className="capture-frame" autoPlay={true}></video>
                    <div className="action-button">
                        <button>CAPTURE</button>
                    </div>
                </div>
                <div className="side2">
                    <canvas className="image-display"></canvas>
                    <div className="action-button">
                        <button>DISCARD</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginImageCapture