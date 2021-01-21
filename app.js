var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector('#txt-input');
var txtOutput = document.querySelector('#txt-output');
var hodorURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input, serverURL){
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickEventHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText, hodorURL))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickEventHandler);