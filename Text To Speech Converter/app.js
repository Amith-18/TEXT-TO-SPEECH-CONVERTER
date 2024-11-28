

let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector('select');
window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i) => {
        voiceSelect.options[i]  = new Option(voice.name,i);
    });
};

voiceSelect.addEventListener('change',() =>{
    speech.voice    =   voices[voiceSelect.value];
})


document.querySelector('button').addEventListener('click',()=>{
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});


// // Create a new SpeechSynthesisUtterance instance, which will handle the text-to-speech functionality.
// let speech = new SpeechSynthesisUtterance();

// // Array to store available voices from the SpeechSynthesis API.
// let voices = [];

// // Get the <select> dropdown element from the HTML to populate voice options.
// let voiceSelect = document.querySelector('select');

// // Event listener triggered when the browser's list of voices changes or becomes available.
// window.speechSynthesis.onvoiceschanged = () => {
//     // Get the list of available voices and store it in the `voices` array.
//     voices = window.speechSynthesis.getVoices();
    
//     // Set the initial voice for the speech synthesis to the first voice in the list.
//     speech.voice = voices[0];
    
//     // Loop through each voice and add it as an option to the <select> dropdown.
//     voices.forEach((voice, i) => {
//         // Create a new <option> element with the voice's name and index as the value.
//         voiceSelect.options[i] = new Option(voice.name, i);
//     });
// };

// // Event listener for when the user selects a different voice from the dropdown.
// voiceSelect.addEventListener('change', () => {
//     // Update the `speech.voice` property to the selected voice using the dropdown's value.
//     // `voiceSelect.value` contains the index of the selected voice.
//     speech.voice = voices[voiceSelect.value];
// });

// // Event listener for when the "Speak" button is clicked.
// document.querySelector('button').addEventListener('click', () => {
//     // Get the text from the <textarea> element and set it as the speech's text.
//     speech.text = document.querySelector('textarea').value;

//     // Use the SpeechSynthesis API to speak the text using the selected voice.
//     window.speechSynthesis.speak(speech);
// });


