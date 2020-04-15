import React from 'react';
import { Link } from 'react-router-dom';

class PokemonCard extends React.Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
        url:""
    };

    componentDidMount() {
        const name = this.props.name;
        const url = this.props.url;
        const pokemonIndex = url.split("/")[url.split("/").length-2];
        const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

        this.setState({
            name:name,
            imageUrl:src,
            pokemonIndex:pokemonIndex,
            url:url
        })
    }

    render(){
           return (
            <div >
                <Link to={`pokemon/${this.state.pokemonIndex}`}>
                    <div >
                        <div className="list-group-item list-group-item-secondary sss">
                            <h2 className="card-header" onChange={this.getPokemon} >{this.state.name}</h2>
                            <div className="poke-img" >
                                <img
                                    className="main clickable"
                                    src={this.state.imageUrl}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )}
}
export default PokemonCard;