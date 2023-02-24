import React from 'react';
import { Player, LoadingSpinner } from 'video-react';
import introVideo from '../../../assets/videos/intro_video.mp4';

const IntroVideo = () => {
    return (
        <React.Fragment>
            <Player src={introVideo} autoPlay={true}>
                <LoadingSpinner />
            </Player>
        </React.Fragment>
    );
};

export default IntroVideo;