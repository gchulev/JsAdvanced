'use strict';

class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, possition, department) {
        if (!name || salary < 0 || !salary|| !possition || !department) {
            throw new Error("Invalid input!");
        }
        let employee = {
            name,
            salary,
            possition,
            department
        }
        let departmentName = employee.department;

        if (!this.departments.hasOwnProperty(departmentName)) {
            this.departments[departmentName] = [];
        }
        this.departments[departmentName].push(employee);

        return `New employee is hired. Name: ${employee.name}. Position: ${employee.possition}`;
    }

    bestDepartment() {
        let bestDepartment = '';
        let bestAvgSalary = 0;
        let bestDepEmployees = [];

        for (const [depName, emplArray] of Object.entries(this.departments)) {
            let currentDepartmentName = depName;
            let currentAvgSalary = emplArray.reduce((acc, empl) => acc + empl.salary, 0) / emplArray.length;

            if (bestAvgSalary < currentAvgSalary) {
                bestAvgSalary = currentAvgSalary;
                bestDepartment = currentDepartmentName;
                bestDepEmployees = emplArray;
            }
        }

        bestDepEmployees.sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name)
        });
        let employeesResult = '';
        for (const employee of bestDepEmployees) {
            employeesResult += `${employee.name} ${employee.salary} ${employee.possition}\n`
        }
        let cleanEmpResult = employeesResult.trim();
        return `Best Department is: ${bestDepartment}\nAverage salary: ${bestAvgSalary.toFixed(2)}\n${cleanEmpResult}`;
    }
}

// class Employee {
//     constructor(name, salary, possition, department) {
//         this.name = name;
//         this.salary = salary;
//         this.possition = possition;
//         this.department = department;
//     }

//     get name() {
//         return this._name;
//     }
//     set name(value) {
//         if (value === '' || value === undefined || value === null) {
//             throw new Error("Invalid input!");
//         }
//         this._name = value;
//     }

//     get salary() {
//         return Number(this._salary);
//     }
//     set salary(value) {
//         if (value === '' || value === undefined || value === null || this.value < 0) {
//             throw new Error("Invalid input!");
//         }
//         this._salary = value;
//     }

//     get possition() {
//         return this._possition;
//     }
//     set possition(value) {
//         if (value === '' || value === undefined || value === null) {
//             throw new Error("Invalid input!");
//         }
//         this._possition = value;
//     }

//     get department() {
//         return this._department;
//     }
//     set department(value) {
//         if (value === '' || value === undefined || value === null) {
//             throw new Error("Invalid input!");
//         }
//         this._department = value;
//     }
// }



let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());


// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.bestDepartment());
