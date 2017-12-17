const setup = () => {
    var fileInput = document.querySelector('input[type="file"]');
    fileInput.addEventListener('change',filePicked, false);


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
};

console.log("hello mpc");
setup();