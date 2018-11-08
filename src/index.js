// Import required libraries
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Import child components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// YouTube API key
const API_KEY = 'AIzaSyAcY4Qsi-NbckbRgQN756W-zTrsXP1p5Hw';

// Create the 'App' component
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            results: [],
            selectedVideo: null
        };

        this.videoSearch('react tutorial');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term}, (results) => {
            this.setState({ 
                results: results, 
                selectedVideo: results[0] 
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <div className="row">
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList 
                        onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
                        videos={this.state.results} />
                </div>
            </div>
        );
    }
}

// Render 'App' component to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));