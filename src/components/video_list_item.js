// Import required libraries
import React from 'react';

// Create VideoListItem component
const VideoListItem = (props) => {
    const video       = props.video;
    const imageURL    = video.snippet.thumbnails.default.url;
    const title       = video.snippet.title;
    
    // console.log(video);

    return (
        <li className="video-item list-group-item" onClick={() => props.onVideoSelect(video)}>
            <div className="video-info media">
                <img src={imageURL} alt="" className="mr-3" />

                <div className="media-body">
                    <h5 className="mt-0">{title}</h5>
                </div>
            </div>
        </li>
    );
};

// Export VideoListItem
export default VideoListItem;