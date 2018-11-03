// Import required libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import components
import SearchBar from './components/search_bar';

// YouTube API key
const API_KEY = 'AIzaSyAcY4Qsi-NbckbRgQN756W-zTrsXP1p5Hw';

// Create the 'App' component
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Render 'App' component to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));