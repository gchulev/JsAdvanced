"use strict";

function prevousDay(year, month, day) {

    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1);

    let currentDay = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getUTCFullYear();

    let result = `${currentYear}-${currentMonth}-${currentDay}`;

    console.log(result);
}

prevousDay(2016, 9, 30);
prevousDay(2016, 10, 1);
prevousDay(2017, 1, 1);
