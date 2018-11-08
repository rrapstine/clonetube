// Import required libraries
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
        
        YTSearch({ key: API_KEY, term: 'surfboards'}, (results) => this.setState({ results: results, selectedVideo: results[0] }));
    }

    performSearch(term) {

    }

    render() {
        return (
            <div>
                <SearchBar />
                <div class="row">
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList 
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                        videos={this.state.results} />
                </div>
            </div>
        );
    }
}

// Render 'App' component to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));