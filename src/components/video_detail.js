// Import required libraries
import React from 'react';

// Create the VideoDetail component
const VideoDetail = (props) => {
    // If no video loaded, return nothing
    if (!props.video) {
        return null;
    }
    
    const video   = props.video;
    const videoID = video.id.videoID;
    const url     = `https://www.youtube.com/embed/${videoID}`;

    return (
        <div className="video-detail col-md-8">
            <div className="video-container embed-responsive embed-responsive-16by9">
                <iframe src={url} className="embed-responsive-item" />
            </div>
            <div className="details">
                <h5 className="video-title">{video.snippet.title}</h5>
                <p className="video-description">{video.snippet.description}</p>
            </div>
        </div>
    );
};

// Export VideoDetail
export default VideoDetail;
