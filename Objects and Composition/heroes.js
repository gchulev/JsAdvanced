'use strict';

function solve() {
    return {
        mage,
        fighter
    }

    function mage(mageName) {
        return {
            name: mageName,
            health: 100,
            mana: 100,
            cast(spell) {
                this.mana--
                console.log(`${this.name} cast ${spell}`)
            }
        }
    }

    function fighter(figherName) {
        return {
            name: figherName,
            health: 100,
            stamina: 100,
            fight() {
                this.stamina--
                console.log(`${this.name} slashes at the foe!`)
            }
        }
    }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
