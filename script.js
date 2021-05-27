let form = document.querySelector('form') ; 
form.onsubmit = (e) => {
    e.preventDefault() ; 
    let formData  =  new FormData(form) ; 
    let input = formData.get('text') ; 
    utterUserInput(input) ; 
}

function utterUserInput(text) {
    let speech = new SpeechSynthesisUtterance(text) ; 
    speechSynthesis.speak(speech) ; 
}