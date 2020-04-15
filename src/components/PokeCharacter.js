import React from 'react';

class PokeCharacter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pokemon:[],
            name: '',
            pokemonIndex: '',
            imageUrl: '',
            types:[],
            url:[],
            height:'',
            weight:'',
            abilities:[],
            stats:[]

        }
    }
    componentDidMount() {
        const { pokemonIndex } = this.props.match.params;

        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
        const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;
        const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
        this.setState({
            imageUrl:src,
            pokemonIndex:pokemonIndex,
        });
        fetch(pokemonUrl, {
            method: 'GET'
        }).then (resp => {
            return resp.json();
        }).then(data => {
            this.setState(
                { name: data['name'],
                    height:data['height']/10,
                    weight:data['weight']/10,
                    types:data.types,
                    url:pokemonUrl,
                    abilities:data.abilities,
                    stats:data.stats
                });
        }).catch(err => {
            console.log('eRroR!', err)
        });
    };

    render(){
        // console.log(this.state.stats);

        return (
            <div>
                <div className="container poke-character">
                <div className="col">
                    <div className=" card">

                        <h2 className="card-header">{this.state.name} </h2>

                        <div className="row" >

                            <div className="col-5"/>

                            <div className="col-7" >
                                <div className="float-right"> </div>

                                <img className="poke-character-data-img" src={this.state.imageUrl}  alt=""/>
                                <div className="poke-character-data-txt" > </div>
                            </div>


                            <div className="poke-character-data-container">

                                <div className="card-body">
                                    <div className="row" >
                                        <div className="col-md-6">
                                            <div className="row" >
                                                <div className="col-6">
                                                    <h6 className="float-right">Height:</h6>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-left">{this.state.height} m</h6>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-right">Weight:</h6>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-left">{this.state.weight} kg</h6>
                                                </div>
                                                <div className="col-6">
                                                        <h6 className="float-right"> Types:</h6>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-left">{this.state.types.map(type => (
                                                        <span
                                                            key={type} className="type"> {type.type.name}
                                                        </span>
                                                        ))}</h6>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-right"> Abilities:</h6>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-left"> {this.state.abilities.map(type => (
                                                        <span key={type} className="ability"> {type.ability.name}</span>
                                                    ))}</h6>
                                                </div>
                                            </div>
                                        </div>
{/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
                                        <div className="col-md-6"
                                             style={{
                                            paddingRight:"150px"}}>
                                            <div className="row">

                                                <div className="col-6">
                                                    <h6 className="float-right">Statistics:</h6>
                                                </div>
                                                <div className="col-6"></div>

                                                <div className="col-6">
                                                    <div className="float-right pion"
                                                        style={{
                                                        width:"200px"}}
                                                    > {this.state.stats.map(type => (
                                                        <span className="prawa" key={type} >  {type.stat.name} </span>
                                                    ))}</div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="float-left pion"> {this.state.stats.map(type => (

                                                        <div className="progress progress-wdt">
                                                            <div className="progress-bar"  role="progressbar"
                                                                 style={{
                                                                     width: `${type.base_stat}%`,
                                                                     backgroundColor: `#007bff`
                                                                 }} >
                                                                <small>{type.base_stat}</small>
                                                            </div>
                                                        </div>

                                                        // <span key={type} >  {type.base_stat}</span>
                                                    ))}</div>
                                                </div>


                                            </div>
                                        </div>
   {/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )};
}
export default PokeCharacter;