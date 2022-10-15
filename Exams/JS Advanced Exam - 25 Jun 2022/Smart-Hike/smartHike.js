'use strict';

class SmartHike{
    constructor(username){
        this.username = String(username);
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude){
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        }
        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyLevel){
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }
        if (this.resources === 0) {
            throw new Error("You don't have enough resources to start the hike");
        }
        let difference = this.resources - Number(time) * 10;
        // What if it is 0? Not clear from the description.
        if (difference < 0) {
            return "You don't have enough resources to complete the hike";
        }
        this.resources = difference;
        this.listOfHikes.push({peak, time, difficultyLevel});
        return `You hiked ${peak} peak for ${time} hours and you have ${difference}% resources left`
    }

    rest(time){
        let newResources = this.resources + Number(time) * 10;
        if (newResources > 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        }
        this.resources += Number(time) * 10;
        return `You have rested for ${time} hours and gained ${Number(time)*10}% resources`
    }

    showRecord (criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`
        }

        if (criteria === 'easy' || criteria === 'hard') {
            
            this.listOfHikes.sort((a, b) => a.difficultyLevel.localeCompare(b.difficultyLevel)).sort((a, b) => a.time - b.time);
            let bestHike = this.listOfHikes.find(elm => elm.difficultyLevel === criteria);
            if (bestHike === undefined) {
                return `${this.username} has not done any ${criteria} hiking yet`
            }

            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;

        } else if (criteria === 'all') {
            let result = 'All hiking records:\n';

            for (const hike of this.listOfHikes) {
                result += `${this.username} hiked ${hike.peak} for ${hike.time} hours\n`;
            }
            return result.trimEnd();
        }
    }
}

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));


// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));

// const user = new SmartHike('Vili');
// console.log(user.showRecord('all'));

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
user.rest(10);
user.addGoal('Everest', 8706);
user.hike('Everest', 3, 'hard');
user.addGoal('K2', 6706);
user.hike('K2', 4, 'hard');
user.addGoal('Vitosha', 2200);
user.hike('Vitosha', 1, 'easy');
console.log(user.showRecord('easy'));
console.log(user.showRecord('all'));



