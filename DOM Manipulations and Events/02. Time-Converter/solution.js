function attachEventsListeners() {
    let daysElm = document.getElementById('days');
    let hoursElm = document.getElementById('hours');
    let minutesElm = document.getElementById('minutes');
    let secondsElm = document.getElementById('seconds');

    let buttons = Array.from(document.querySelectorAll('input[type="button"]'));

    for (const btn of buttons) {
        btn.addEventListener('click', convert);
    }

    function convert(e) {

        if (e.target.id === 'daysBtn') {
            daysElm.value = daysElm.value.trim();

            if (daysElm.value === '') {
                daysElm.value = 1;
            }

            secondsElm.value = Number(daysElm.value) * 86400;
            minutesElm.value = Number(secondsElm.value) / 60;
            hoursElm.value = Number(secondsElm.value) / 3600;
        }
        else if (e.target.id === 'hoursBtn') {
            hoursElm.value = hoursElm.value.trim();

            if (hoursElm.value === '') {
                hoursElm.value = 24;
            }

            secondsElm.value = Number(hoursElm.value) * 3600;
            minutesElm.value = Number(secondsElm.value) / 60;
            daysElm.value = Number(hoursElm.value) / 24;

        }
        else if (e.target.id === 'minutesBtn') {
            minutesElm.value = minutesElm.value.trim();

            if (minutesElm.value === '') {
                minutesElm.value = 1440;
            }

            secondsElm.value = Number(minutesElm.value) * 60;
            hoursElm.value = Number(secondsElm.value) / 3600;
            daysElm.value = Number(secondsElm.value) / 86400;

        }
        else if (e.target.id === 'secondsBtn') {
            secondsElm.value = secondsElm.value.trim();

            if (secondsElm.value === '') {
                secondsElm.value = 86400;
            }

            minutesElm.value = Number(secondsElm.value) / 60;
            hoursElm.value = Number(secondsElm.value) / 3600;
            daysElm.value = Number(hoursElm.value) / 24;
        }
    }
}