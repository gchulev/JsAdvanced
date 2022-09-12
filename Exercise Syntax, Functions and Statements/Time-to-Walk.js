function timeToWalk(steps, studentStepLength, studentSpeed){
    let time = (steps * studentStepLength) / ((studentSpeed * 1000) / 60);
    let totalLength = steps  * studentStepLength;
    let additionalTime = (totalLength - totalLength % 500) / 500;
    
    let hours = (time - time % 60) / 60;
    let minutes = Math.trunc(time) % 60;
    let seconds = Math.round((time * 60) % 60);

    let additionalHours = (additionalTime - additionalTime % 60) / 60;
    let additionalMinutes = Math.trunc(additionalTime) % 60;
    let additionalSeconds = Math.round((additionalTime * 60) % 60);

    let totalHours = hours + additionalHours;
    let totalMinutes = minutes + additionalMinutes;
    let totalSeconds = seconds + additionalSeconds;

    if (totalMinutes >= 60) {
        totalMinutes = additionalMinutes;
    }
    if (totalSeconds >= 60) {
        totalSeconds = additionalSeconds;
    }

    if (totalHours < 10) {
        totalHours = '0' + String(totalHours);
    }
    if (totalMinutes < 10) {
        totalMinutes = '0' + String(totalMinutes);
    }
    if (totalSeconds < 10) {
        totalSeconds = '0' + String(totalSeconds);
    }

    console.log(`${totalHours}:${totalMinutes}:${totalSeconds}`);
}

//timeToWalk(4000, 0.60, 5);
//timeToWalk(2564, 0.70, 5.5);
timeToWalk(8531, 0.70, 8.5);