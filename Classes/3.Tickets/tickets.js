'use strict';

function storeTickets(inputArr, sortCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    
    let outputArray = [];
    for (const ticketItem of inputArr) {
        let destination = ticketItem.split('|')[0];
        let price = Number(ticketItem.split('|')[1]);
        let status = ticketItem.split('|')[2];

        let ticket = new Ticket(destination, price, status);
        outputArray.push(ticket);
    }

    function sortByDestination(a, b) {
        if (a.destination.toLowerCase() > b.destination.toLowerCase()) {
            return 1;
        } else if (a.destination.toLowerCase() === b.destination.toLowerCase()) {
            return 0
        } else {
            return -1;
        }
    }

    function sortByPrice(x, y) {
        if (x.price > y.price) {
            return 1;
        }
        if (x.price === y.price) {
            return 0;
        }
        if (x.price < y.price) {
            return -1;
        }
    }

    function sortByStatus(a, b) {
        let aStatus = a.status.toLowerCase();
        let bStatus = b.status.toLowerCase();

        if (aStatus > bStatus) {
            return 1;
        }
        if (aStatus === bStatus) {
            return 0;
        }
        if (aStatus < bStatus) {
            return -1;
        }

    }
    if (sortCriterion === 'destination') {
        outputArray.sort(sortByDestination)
    } else if (sortCriterion === 'price') {
        outputArray.sort(sortByPrice);
    } else if (sortCriterion === 'status') {
        outputArray.sort(sortByStatus);
    }
    return outputArray;
}

// console.table(storeTickets([
//     'Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'destination'));

console.table(storeTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'));

// console.table(storeTickets([
//     'Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'price'));

console.table(storeTickets([
    'Philadelphia|94.20|available',
    'New York City|295.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'));
