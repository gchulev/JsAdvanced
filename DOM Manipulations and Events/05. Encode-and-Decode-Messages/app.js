function encodeAndDecodeMessages() {
    
    document.querySelector('textarea:not(.disabled)').parentNode.getElementsByTagName('button')[0].addEventListener('click', encondeAndSend);
    document.querySelector('textarea[disabled]').parentNode.getElementsByTagName('button')[0].addEventListener('click', decodeAndDisplay);
    
    
    function encondeAndSend(){
        let inputText = document.querySelector('textarea:not(.disabled)').value;
        let encodedText = '';

        for (const chr of inputText) {
            let initialCharCode = chr.charCodeAt();
            initialCharCode++;

            let newChar = String.fromCharCode(initialCharCode);
            encodedText += newChar;
        }

        document.querySelector('textarea:not(.disabled)').value = '';
        document.querySelector('textarea[disabled]').value = encodedText;
        console.log(encodedText);
    }

    function decodeAndDisplay(){
        let inputText = document.querySelector('textarea[disabled]').value;
        let decodedText = '';

        for (const chr of inputText) {
            let initalCharCode = chr.charCodeAt();
            initalCharCode--;

            let newChar = String.fromCharCode(initalCharCode);
            decodedText += newChar;
        }

        document.querySelector('textarea[disabled]').value = decodedText;
    }
}