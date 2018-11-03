// Import required libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Import child components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

// YouTube API key
const API_KEY = 'AIzaSyAcY4Qsi-NbckbRgQN756W-zTrsXP1p5Hw';

// Create the 'App' component
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { results: []};
        
        YTSearch({ key: API_KEY, term: 'surfboards'}, (results) => this.setState({ results }));
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.results} />
            </div>
        );
    }
}

// Render 'App' component to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));