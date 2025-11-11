import React, { Component, FormEvent } from "react";
import "./SearchBar.css";

interface SearchBarProps {
  onSearch: (pokemonName: string) => void;
}

interface SearchBarState {
  searchTerm: string;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter Pokémon name (e.g., pikachu)"
            value={this.state.searchTerm}
            onChange={this.handleInputChange}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
