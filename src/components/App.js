import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonList from "./PokemonList";
import Card from "../Css/Card.css";
import List from "../Css/List.css";
import Character from "../Css/Character.css";
import {HashRouter as Router, Switch,Route,NavLink} from "react-router-dom";
import PokeCharacter from "./PokeCharacter";

class App extends React.Component {

    render(){

        return (
            <Router>
                <div>
                   <div >
                       <header className="card-header main-yellow">Pokedex</header>
                       {/*<PokemonList/>*/}
                   </div>
                   <div className="background1" >
                       <Switch>
                           <Route exact path="/" component={PokemonList} />
                           <Route path="/pokemon/:pokemonIndex" component={PokeCharacter} />

                       </Switch>
                   </div>
                </div>
            </Router>
        )}
}
export default App;