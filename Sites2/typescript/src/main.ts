import { sayHello } from "./greet";

function showHello(divId: string, name: string) {
    const elt = document.getElementById(divId);
    elt.innerText = sayHello(name);
}

showHello("greeting", "TypeScript");


class PokemonTrainer {
    name: string;
    numberOfPokeballs: number;
    pokemon: Array<Pokemon>;
    gymBadges: string[];

    startFight(pokemon: Pokemon, attackName: string): string {
        return pokemon.attack(attackName);
    }

    runAway(): string{
        return "see ya!"
    }
}

class Pokemon {
    name: string;
    hp: number;
    trainerName: string;
    private attacks: Array<string>;

    get attacks(): Array<string>{
        return this.attacks;
    }

    set attacks(attacks: Array<string>) {
            this.attacks = attacks;
    }

    attack(attackName: string): string{
        return attackName;
    }
}