import React from 'react';
import PokemonCard from "./PokemonCard";

class PokemonList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            poke: [],
            url:"https://pokeapi.co/api/v2/pokemon/",
            pokemon:[],
            pokemonIndex:0
        };
    }

    componentDidMount() {

        fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20", {
            method: 'GET'
        }).then (resp => {
            return resp.json();
        }).then(data => {
                this.setState({ pokemon: data['results'] });
        }).catch(err => {
            console.log('eRroR!', err)
        });
    };

    next =()=> {
          this.setState({
            pokemonIndex: this.state.pokemonIndex + 20
        })
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${this.state.pokemonIndex}&limit=${this.state.pokemonIndex}`, {
            method: 'GET'
        }).then (resp => {
            return resp.json();
        }).then(data => {
            this.setState({ pokemon: data['results'] });
        }).catch(err => {
            console.log('eRroR!', err)
        });
    };


    render(){

        return (
            < div className="list">
                <div className="card-body border-bottom list-group-item-secondary" style={{
                    height:"60px" }}>

                    <div className="btn">
                        <button className="btn btn-dark" onClick={this.next}>More Pokemons</button>
                    </div>
                </div>
                <div className='poke-list'>
                    {this.state.pokemon.map(
                            (item) => (
                                <div className='poke-list' key={item.name}>
                                    <PokemonCard name={item.name} url={item.url}/>
                                </div>
                    ))}
                </div>
            </div>
        )}
}
export default PokemonList;