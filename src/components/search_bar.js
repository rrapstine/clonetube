// Import React library
import React, { Component } from 'react';

// Create the SearchBar component
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
    
    render() {
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

// Export SearchBar
export default SearchBar;