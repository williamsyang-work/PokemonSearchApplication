import { Component } from 'react';
import { Pokemon } from 'pokenode-ts';
import './PokemonCard.css';

interface PokemonCardProps {
  pokemon: Pokemon;
  onClose: () => void;
}

class PokemonCard extends Component<PokemonCardProps> {
  getTypeColor = (type: string): string => {
    const typeColors: { [key: string]: string } = {
      normal: '#A8A878',
      fire: '#F08030',
      water: '#6890F0',
      electric: '#F8D030',
      grass: '#78C850',
      ice: '#98D8D8',
      fighting: '#C03028',
      poison: '#A040A0',
      ground: '#E0C068',
      flying: '#A890F0',
      psychic: '#F85888',
      bug: '#A8B820',
      rock: '#B8A038',
      ghost: '#705898',
      dragon: '#7038F8',
      dark: '#705848',
      steel: '#B8B8D0',
      fairy: '#EE99AC'
    };

    return typeColors[type] || '#777777';
  };

  capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  render() {
    const { pokemon, onClose } = this.props;

    return (
      <div className="pokemon-card">
        <div className="pokemon-header">
          <h2>{this.capitalize(pokemon.name)} #{pokemon.id}</h2>
          <button
            className="close-button"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="pokemon-content">
          <div className="pokemon-image-container">
            <img src={(pokemon.sprites.front_default) as string} alt={pokemon.name} className="pokemon-image" />

            <div className="pokemon-types">
              {pokemon.types.map((type, index) => (
                <span
                  key={index}
                  className="pokemon-type"
                  style={{ backgroundColor: this.getTypeColor(type.type.name) }}
                >
                  {this.capitalize(type.type.name)}
                </span>
              ))}
            </div>
          </div>

          <div className="pokemon-info">
            <div className="pokemon-details">
              <p><strong>Height:</strong> {pokemon.height} m</p>
              <p><strong>Weight:</strong> {pokemon.weight} kg</p>
            </div>

            <div className="pokemon-abilities">
              <h3>Abilities</h3>
              <ul>
                {pokemon.abilities.map((ability, index) => (
                  <li key={index}>{this.capitalize(ability.ability.name.replace('-', ' '))}</li>
                ))}
              </ul>
            </div>

            <div className="pokemon-stats">
              <h3>Base Stats</h3>
              {pokemon.stats.map((stat, index) => (
                <div key={index} className="stat-bar">
                  <div className="stat-name">{this.capitalize(stat.stat.name.replace('-', ' '))}:</div>
                  <div className="stat-value-container">
                    <div
                      className="stat-value"
                      style={{ width: `${Math.min(100, stat.base_stat / 2)}%` }}
                    ></div>
                    <span className="stat-number">{stat.base_stat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonCard;