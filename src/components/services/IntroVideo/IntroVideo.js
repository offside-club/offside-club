import React from 'react';

const IntroVideo = () => {
    return (
        <React.Fragment>
            <iframe className='introVideo' src="https://www.youtube.com/embed/smvn4EmqcqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </React.Fragment>
    );
};

export default IntroVideo;