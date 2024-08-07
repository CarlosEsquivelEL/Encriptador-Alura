function encryptText() {
    let inputText = document.getElementById('inputText').value;
    if (inputText.trim() !== '') {
        let encryptedText = btoa(inputText); 
        let outputTextArea = document.getElementById('outputText');
        outputTextArea.value += (outputTextArea.value ? '\n' : '') + encryptedText;
        document.getElementById('inputText').value = ''; 
    }
}

function decryptText() {
    let outputTextArea = document.getElementById('outputText');
    if (outputTextArea.value.trim() !== '') {
        let encryptedTexts = outputTextArea.value.split('\n');
        let decryptedTexts = encryptedTexts.map(text => atob(text));
        let inputTextArea = document.getElementById('inputText');
        inputTextArea.value += (inputTextArea.value ? '\n' : '') + decryptedTexts.join('\n');
    }
}

function clearOutput() {
    document.getElementById('outputText').value = '';
    document.getElementById('inputText').value = '';
}
