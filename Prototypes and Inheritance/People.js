'use strict';

function solution() {
    class Employee {
        #salary;
        constructor(name, age) {
            this.name = name;
            this.age = Number(age);
            this.#salary = 0;
            this.tasks = [];

        }

        get salary() {
            return this.#salary;
        }

        set salary(value) {
            this.#salary = value;
        }

        work() {
            let workingOnTask = this.tasks.shift();
            console.log(workingOnTask);
            this.tasks.push(workingOnTask);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`)
        }
    }


    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);

            this.tasks = [`${this.name} is working on a simple task.`];
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);

            this.tasks = [
                `${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.`
            ];
        }
    }

    class Manager extends Employee {
        #dividend;
        constructor(name, age) {
            super(name, age);

            this.#dividend = 0;
            this.tasks = [
                `${this.name} scheduled a meeting.`,
                `${this.name} is preparing a quarterly report.`
            ];
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`)
        }

        get dividend() {
            return this.#dividend;
        }

        set dividend(value) {
            this.#dividend = value;
        }
    }

    return { Employee, Junior, Senior, Manager };

}



const classes = solution();
const junior = new classes.Junior('Ivan', 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const sinior = new classes.Senior('Alex', 31);

sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager('Tom', 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();  
