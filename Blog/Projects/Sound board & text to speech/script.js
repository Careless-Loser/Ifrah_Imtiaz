// Define an array containing the IDs of each audio element
const sounds = ['Ah-Ha', 'Back-Of-The-Net', 'BangOutOfOrder', 'Dan', 'Email', 'Hellopartridge', 'Egg', 'Confused'];

// Loop through each sound clip ID in the sounds array
sounds.forEach(sound => {
    // Create a new button element for each sound clip
    const btn = document.createElement('button');
    // Add the 'btn' class to the button for styling purposes
    btn.classList.add('btn');
    // Set the text content of the button to the current sound clip name
    btn.innerText = sound;

    // Add a click event listener to the button
    btn.addEventListener('click', () => {
        // Call the stopPlaying function to stop any currently playing sounds
        stopPlaying();
        // Play the corresponding audio for the clicked button
        document.getElementById(sound).play();
    });

    // Append the button to the 'buttons' container element in the HTML
    document.getElementById('buttons').append(btn);
});

// Function to stop playing all audio elements
function stopPlaying() {
    // Loop through each sound clip ID in the sounds array
    sounds.forEach(sound => {
        // Get the audio element corresponding to the current sound clip
        const audio = document.getElementById(sound);
        // Pause the audio playback
        audio.pause();
        // Reset the current playback time to the beginning of the audio clip
        audio.currentTime = 0;
    });
}

// Function to convert text to speech
function textToAudio() {
    // Get the text input value
    let msg = document.getElementById("text-to-speech").value;
    // Create a new SpeechSynthesisUtterance object
    let speech = new SpeechSynthesisUtterance();
    // Set language to English (UK)
    speech.lang = "en-UK";
    // Set the text content of the speech
    speech.text = msg;
    // Set volume, rate, and pitch
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    // Speak the text
    window.speechSynthesis.speak(speech);
}

// Function to draw sound bars
function drawBars() {
    // Create a MediaElementSource from the audio
    audioSource = AudioContext.createMediaElementSource(audio)
}
