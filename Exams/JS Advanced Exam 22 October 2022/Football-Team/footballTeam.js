'use strict';

class FootballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        for (const player of footballPlayers) {
            let playerName = player.split('/')[0];
            let playerAge = Number(player.split('/')[1]);
            let playerValue = Number(player.split('/')[2]);

            let playerFound = this.invitedPlayers.find(p => p.name === playerName);

            if (!playerFound) {
                this.invitedPlayers.push({ name: playerName, age: playerAge, value: playerValue });
            } else {
                if (playerFound.value >= playerValue) {
                    playerFound.value = playerValue;
                }
            }
        }

        return `You successfully invite ${this.invitedPlayers.map(p => p.name).join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let playerName = selectedPlayer.split('/')[0];
        let playerOffer = Number(selectedPlayer.split('/')[1]);

        let foundPlayer = this.invitedPlayers.find(p => p.name === playerName);
        if (!foundPlayer) {
            throw new Error(`${playerName} is not invited to the selection list!`);
        }

        if (playerOffer < foundPlayer.value) {
            let priceDifference = foundPlayer.value - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${playerName}, ${priceDifference} million more are needed to sign the contract!`);
        }

        foundPlayer.value = 'Bought';

        return `Congratulations! You sign a contract with ${playerName} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        let foundPlayer = this.invitedPlayers.find(p => p.name === name);
        if (!foundPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (foundPlayer.age < age) {
            let ageDifference = age - foundPlayer.age;

            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            }
            if (ageDifference > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult() {
        let result = 'Players list:\n';

        let sortedPlayersByName = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));

        for (const player of sortedPlayersByName) {
            result += `Player ${player.name}-${player.value}\n`;
        }

        return result.trimEnd();
    }
}

// let fTeam = new FootballTeam("Barcelona", "Spain");
//  console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52", "Kylian Mbappé/23/160"]));


// let fTeam = new FootballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// let fTeam = new FootballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

let fTeam = new FootballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

