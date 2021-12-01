class Reproductor {
    constructor() {

    }

    leerArchivo(archivos) {
        if(window.webkitAudioContext) {
            this.audio = new window.webkitAudioContext();
        }
        else {
            this.audio = new window.AudioContext();
        }

        var fileReader = new FileReader();
        fileReader.onload = (e) =>{
            this.playMusic(e.target.result);
        };
        fileReader.readAsArrayBuffer(archivos[0]);
    }

    playMusic(audioFile) {
        this.audio.decodeAudioData(audioFile, (buffer) => {
            this.audioBuffer = buffer;
        })
    }

    play() {
        this.stop();
        this.source = this.audio.createBufferSource();
        this.source.buffer = this.audioBuffer;
        this.source.loop = true;
        this.source.connect(this.audio.destination);
        this.source.start(0);
    }

    stop() {
        if (this.source) {
            this.source.stop();
        }
    }

    fullScreen() {
        var elem = document.getElementsByTagName("button")[2];
        elem.requestFullscreen();
    }
}

var reproductor = new Reproductor();