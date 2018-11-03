// Import required libraries
import React from 'react';

// Import child components
import VideoListItem from './video_list_item';

// Create the VideoList component
const VideoList = (props) => {
    // Create VideoListItem for each video
    const videos = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} />
    });

    return (
        <ul>
            {videos}
        </ul>
    );
};

// Export VideoList
export default VideoList;