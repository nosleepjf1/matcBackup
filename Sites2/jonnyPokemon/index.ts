/**
 * Created by bobnweave on 6/22/16.
 */
import {PokemonTrainer, Pokemon} from 'pokemon-ts/main'


export class Trainer implements PokemonTrainer {
    name: string;
    numberOfPokeballs: number;
    pokemon: Array<Pokemon>;

    constructor(name: string, numberOfPokeballs: number, pokemon: Array<Pokemon>){
        this.name = name;
        this.numberOfPokeballs = numberOfPokeballs;
        this.pokemon = pokemon;

    }

    attack(pokemon: Pokemon, attackName: string){
        return `${pokemon.name} attacks with ${attackName}`;
    };

    runAway(){
        return 'flee!!';
    }
    healPokemon(pokemon: Pokemon){
        pokemon.heal();
    };
}

export function createLoganTrainer(){
    var charzar = new Pokemon('charzar', 'Logan', 5);
    var jigglypuff = new Pokemon('jigglypuff', 'Logan', 1);
    var squirtle = new Pokemon('squirtle', 'Logan', 3);

    var myArray = [charzar, jigglypuff, squirtle];

    var Logan = new Trainer('logan', 3, myArray);
   // Logan.pokemon = myArray;

    return Logan;
}