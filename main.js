var loadedFileAudioBuffer = null; //this is where we store the decoded audio data from our file

var browserAudioLibrary = new AudioContext();//window.webkitAudioContext(); //this is what the browser gives us to process audio stuff


const setup = () => {
    var fileInput = document.querySelector('input[type="file"]');
    fileInput.addEventListener('change',filePicked, false);

    var buttons = document.querySelectorAll('.pad');
    console.log(buttons);
    buttons.forEach(function(element) {
        element.addEventListener('click', playSound);
    }, this);
    

};

const filePicked = (event) => {
    console.log("file pic")
    var reader = new FileReader();
    reader.onload = function(e){
        initSound(this.result);
        console.log("file finished loading")
    }
   
    reader.readAsArrayBuffer(event.currentTarget.files[0])
}

const initSound = (soundBuffer) => {
    console.log("now we need to process uadio from loaded file")
    browserAudioLibrary.decodeAudioData(soundBuffer, function(buffer) {
        loadedFileAudioBuffer = buffer;
        console.log("stored file", loadedFileAudioBuffer);
        playSound();
    }, function(e) {
        console.log('Error decoding file', e);
    });     
};

const playSound = (event) => {
    player = browserAudioLibrary.createBufferSource();
    player.buffer = loadedFileAudioBuffer;
    player.loop = false;
    player.connect(browserAudioLibrary.destination);
    player.start(); // Play immediately.
    
};

console.log("hello mpc");
setup();