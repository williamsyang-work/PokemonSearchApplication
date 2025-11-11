// App.tsx
import { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import PokemonCard from './components/PokemonCard';
import { PokemonClient, Pokemon } from 'pokenode-ts';

interface AppState {
  pokemonList: Pokemon[];
  isLoading: boolean;
  error: string | null;
}

const api = new PokemonClient();

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      pokemonList: [],
      isLoading: false,
      error: null
    };
  }

  handleSearch = async (pokemonName: string) => {
    if (!pokemonName.trim()) {
      this.setState({ error: "Please enter a Pokémon name", isLoading: false });
      return;
    }
    api.listPokemons(0, 10000);

    // Prevent duplicates
    const pokemonExists = this.state.pokemonList.some(
      p => p.name.toLowerCase() === pokemonName.toLowerCase()
    );
    if (pokemonExists) {
      this.setState({ error: "This Pokémon is already displayed", isLoading: false });
      return;
    }

    this.setState({ isLoading: true, error: null });

    try {
      // Fetch via typed client
      const p = await api.getPokemonByName(pokemonName.toLowerCase());

      this.setState(prev => ({
        pokemonList: [...prev.pokemonList, p],
        isLoading: false
      }));
    } catch (err) {
      const msg =
        err instanceof Error && err.message.includes('404')
          ? 'Pokémon not found'
          : err instanceof Error
          ? err.message
          : 'An unknown error occurred';
      this.setState({ error: msg, isLoading: false });
    }
  };

  handleRemovePokemon = (id: number) => {
    this.setState(prev => ({
      pokemonList: prev.pokemonList.filter(p => p.id !== id)
    }));
  };

  render() {
    const { pokemonList, isLoading, error } = this.state;

    return (
      <div className="app-container">
        <h1 className="app-title">Pokémon Search</h1>
        <SearchBar onSearch={this.handleSearch} />

        {isLoading && <div className="loading">Loading...</div>}
        {error && <div className="error-message">{error}</div>}

        <div className="pokemon-cards-container">
          {pokemonList.map(p => (
            <PokemonCard
              key={p.id}
              pokemon={p}
              onClose={() => this.handleRemovePokemon(p.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
