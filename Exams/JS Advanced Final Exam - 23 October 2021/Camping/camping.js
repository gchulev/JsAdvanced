'use strict';

class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        let foundParticipant = this.listOfParticipants.find(p => p.name === name);

        if (foundParticipant !== undefined) {
            return `The ${name} is already registered at the camp.`;
        } else {
            let priceForStay = this.priceForTheCamp[condition];
            if (money < priceForStay) {
                return `The money is not enough to pay the stay at the camp.`;
            } else {
                this.listOfParticipants.push({name: name, condition: condition, power: 100, wins: 0});
                return `The ${name} was successfully registered.`
            }
        }
    }

    unregisterParticipant (name) {
        let foundParticipant = this.listOfParticipants.find(p => p.name === name);

        if (foundParticipant === undefined) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        let indexOfParticipant = this.listOfParticipants.indexOf(foundParticipant);
        this.listOfParticipants.splice(indexOfParticipant, 1);
        return `The ${name} removed successfully.`;
    }

    timeToPlay (typeOfGame, participant1, participant2) {
        let player1 = this.listOfParticipants.find(p => p.name === participant1);
        let player2 = this.listOfParticipants.find(p => p.name === participant2);
        
        if (typeOfGame === 'Battleship') {
            if (!player1) {
                throw new Error(`Invalid entered name/s.`)
            }
            player1.power += 20;
            return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
        } else if (typeOfGame === 'WaterBalloonFights') {
            if (!player1 || !player2) {
                throw new Error(`Invalid entered name/s.`)//check this message at the end
            }
            if (player1.condition !== player2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }
            if (player1.power > player2.power) {
                player1.wins++;
                return `The ${player1.name} is winner in the game ${typeOfGame}.`;
            } else if (player1.power < player2.power) {
                player2.wins++;
                return `The ${player2.name} is winner in the game ${typeOfGame}.`;
            } else {
                return `There is no winner.`;
            }
        }
    }

    toString() {
        let sortedParticipants = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        let result = `${this.organizer} will take ${sortedParticipants.length} participants on camping to ${this.location}\n`;
        for (const participant of sortedParticipants) {
            result += `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}\n`;
        }

        return result.trimEnd();
    }
}


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// //console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// summerCamp.registerParticipant("Mike Wattson", "child", 500);
// console.log(summerCamp.timeToPlay('Battleship', 'Sara Dickinson'));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Sara Dickinson", "Mike Wattson"));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Sara Dickinson", "Mike Wattson"));
// //console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// console.log(summerCamp.toString());


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.registerParticipant("Mike Wattson", "child", 500));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay('WaterBalloonFights', "Mike Wattson", "Tim Davis"));