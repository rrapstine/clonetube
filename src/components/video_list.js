// Import required libraries
import React from 'react';

// Import child components
import VideoListItem from './video_list_item';

// Create the VideoList component
const VideoList = (props) => {
    // Create VideoListItem for each video
    const videos = props.videos.map((video) => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                key={video.etag} 
                video={video} />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videos}
        </ul>
    );
};

// Export VideoList
export default VideoList;