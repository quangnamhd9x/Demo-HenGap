class Sounds {
    constructor(sound) {
        this.sound = sound
    }

    getSound() {
        return this.sound
    }

    stopSound() {
        return this.sound.pause
    }
}

let soundBG = "<audio autoplay>" +
    '<source src="sound/background.mp3" type="audio/mpeg">' +
    '</audio>';

let soundPass = "<audio autoplay>" +
    '<source src="sound/pass.ogg" type="audio/mpeg">' +
    '</audio>';
let soundWrong = "<audio autoplay>" +
    '<source src="sound/wrong.ogg" type="audio/mpeg">' +
    '</audio>';

let soundWin = "<audio autoplay>" +
    '<source src="sound/win.ogg" type="audio/mpeg">' +
    '</audio>';

let soundBackground = new Sounds(soundBG);
let soundTrue = new Sounds(soundPass);
let soundFalse = new Sounds(soundWrong);
let musicWinAll = new Sounds(soundWin)
let musicBackground = document.getElementById('sound')
musicBackground.innerHTML = soundBackground.getSound();
