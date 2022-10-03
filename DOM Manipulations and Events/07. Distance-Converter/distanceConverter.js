function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', convert);

    function convert() {
        let selectedInputElm = Array.from(document.querySelectorAll('select[id="inputUnits"] option')).find(elm => elm.selected === true);
        let selectedOutputElm = Array.from(document.querySelectorAll('select[id="outputUnits"] option')).find(elm => elm.selected === true);

        let inputValue = Number(document.getElementById('inputDistance').value);

        let inputInMeters = 0;
        let outputValue = 0;

        //Converting the input value to meters
        switch (selectedInputElm.value) {

            case 'km':
                inputInMeters = inputValue * 1000;
                break;

            case 'cm':
                inputInMeters = inputValue * 0.01;
                break;

            case 'mm':
                inputInMeters = inputValue * 0.001;
                break;

            case 'mi':
                inputInMeters = inputValue * 1609.34;
                break;

            case 'yrd':
                inputInMeters = inputValue * 0.9144;
                break;

            case 'ft':
                inputInMeters = inputValue * 0.3048;
                break;

            case 'in':
                inputInMeters = inputValue * 0.0254;
                break;
            //Convertion in meters
            default:
                inputInMeters = inputValue;
                break;
        }


        //Converting the output value from meters to the respective unit
        switch (selectedOutputElm.value) {
            case 'km':
            outputValue = inputInMeters / 1000; 
                break;

            case 'cm':
                outputValue = inputInMeters * 100;
                break;

            case 'mm':
                outputValue = inputInMeters * 1000;
                break;

            case 'mi':
                outputValue = inputInMeters / 1609.34;
                break;

            case 'yrd':
                outputValue = inputInMeters / 0.9144;
                break;

            case 'ft':
                outputValue = inputInMeters / 0.3048;
                break;

            case 'in':
                outputValue = inputInMeters / 0.0254;
                break;

            //When the value is in meters
            default: outputValue = inputInMeters;
                break;
        }

        document.getElementById('outputDistance').value = outputValue;
    }
}

//convertion table

// 1 km	 - 1000 m
// 1 m	 - 1 m
// 1 cm	 - 0.01 m
// 1 mm	 - 0.001 m
// 1 mi	 - 1609.34 m
// 1 yrd - 0.9144 m
// 1 ft	 - 0.3048 m
// 1 in  - 0.0254 m
