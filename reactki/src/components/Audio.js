import React, { Component} from 'react';
import AudioPlayer from 'react-audio-element';
import 'react-h5-audio-player/lib/styles.css';

class Audio extends Component {
  render() {
        return (
            <AudioPlayer
                src="reactki/public/videos/Song.mp3"
            />
        );
     }
}

export default Audio