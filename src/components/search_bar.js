// Import React library
import React, { Component } from 'react';

// Create the search bar
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term = ''};
    }

    onInputChange(event) {
        this.setState = { term: event.target.value };
    }
    
    render() {
        return <input onChange={this.onInputChange} />;
    }
}

export default SearchBar;