// Import required libraries
import React from 'react';

// Create VideoListItem component
const VideoListItem = (props) => {
    const video = props.video;

    return (
        <li className="list-group-item">Video</li>
    );
};

// Export VideoListItem
export default VideoListItem;