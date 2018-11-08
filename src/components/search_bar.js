// Import React library
import React, { Component } from 'react';

// Create the SearchBar component
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }

    onInputChange(event) {
        this.setState = { term: event.target.value };
    }
    
    render() {
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={this.onInputChange} />
            </div>
        );
    }
}

// Export SearchBar
export default SearchBar;