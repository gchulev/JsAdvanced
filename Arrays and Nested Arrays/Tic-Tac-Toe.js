'use strict';

function solve(playerInput) {
    let playField = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let player = { coordinates: 0, playerType: '' }
    let samePlayer = false;
    let winnerFound = false;
    let thereIsFreeSpace = true;

    for (let i = 0; i < playerInput.length; i++) {

        player.coordinates = playerInput[i].split(' ').map((num) => Number(num));
        // Setting the player type 
        if (!samePlayer) {
            if (player.playerType === 'O') {
                player.playerType = 'X';
            } else if (player.playerType === 'X') {
                player.playerType = 'O';
            } else {
                player.playerType = 'X';
            }
        }

        if (playField[player.coordinates[0]][player.coordinates[1]] === 'X' || playField[player.coordinates[0]][player.coordinates[1]] === 'O') {
            console.log(`This place is already taken. Please choose another!`);
            samePlayer = true; // Raising a flag in order the same player to repeat his move
        }
        else {
            let currentRow = player.coordinates[0];
            let currentCol = player.coordinates[1];

            playField[currentRow][currentCol] = player.playerType;
            samePlayer = false;
        }

        winnerFound = checkForWinner(playField);

        if (winnerFound) {
            console.log(`Player ${player.playerType} wins!`);
            return console.log(printPlayField(playField));
        }

        thereIsFreeSpace = freeSpaceLeft(playField);

        if (!thereIsFreeSpace) {
            console.log('The game ended! Nobody wins :(');
            return console.log(printPlayField(playField));
        }
    }

    function checkForWinner(playField) {
        if ((winnerByLine(playField)) || winnerByColumn(playField) || winnerByDiagonal(playField)) {
            return true;
        } else {
            return false;
        }
    }

    function freeSpaceLeft(playField) {
        if (playField.some(field => field.some(f => f === false))) {
            return true;
        }
        return false;
    }

    function winnerByColumn(playField) {
        const arrayColumn = (arr, col) => arr.map(x => x[col]);

        for (let i = 0; i < playField.length; i++) {
            if (arrayColumn(playField, i).every(item => item === 'O') || arrayColumn(playField, i).every(item => item === 'X')) {
                return true;
            }
        }
        return false;
    }

    function winnerByDiagonal(playField) {
        let mainDiagCntr = 0;
        let secondaryDiagCntr = playField.length - 1;
        let mainDiag = [];
        let secondaryDiag = [];

        for (let row = 0; row < playField.length; row++) {
            mainDiag.push(playField[row][mainDiagCntr]);
            secondaryDiag.push(playField[row][secondaryDiagCntr]);

            mainDiagCntr++;
            secondaryDiagCntr--;
        }

        if (mainDiag.every(elm => elm === 'O') || mainDiag.every(elm => elm === 'X') || secondaryDiag.every(elm => elm === 'O') || secondaryDiag.every(elm => elm === 'X')) {
            return true
        }
        return false;
    }

    function winnerByLine(playField) {
        return playField.some(arr => arr.every(elm => elm === 'X') || playField.some(arr => arr.every(elm => elm === 'O')));
    }

    function printPlayField(playField) {
        let output = '';
        for (let i = 0; i < playField.length; i++) {
            output += playField[i].join('\t') + '\n';
        }
        return output.trimEnd();
    }
}



// solve([
//     "0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 1",
//     "1 2",
//     "2 2",
//     "2 1",
//     "0 0"
// ]);

// solve([
//     "0 0",
//     "0 0",
//     "1 1",
//     "0 1",
//     "1 2",
//     "0 2",
//     "2 2",
//     "1 2",
//     "2 2",
//     "2 1"
// ]);

// solve([
//     "0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 2",
//     "1 1",
//     "2 1",
//     "2 2",
//     "0 0"
// ]);


// solve([
//     "0 1",
//     "0 0",
//     "2 1",
//     "1 0",
//     "2 2",
//     "2 0",
//     "1 2",
//     "0 2"
// ]);

solve([
    "2 0",
    "0 1",
    "1 1",
    "0 0",
    "0 2",
    "1 2",
    "2 2"
]);