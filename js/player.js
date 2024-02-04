const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");

// song titles

const songs = ['Barbie World', 'Dance The Night', 'Speed Drive', 'Barbie Dreams', 'What Was I Made For', 'Pink']

// keep track of song
let songIndex = 5;

// initially load song
loadSong(songs[songIndex]);

// update the song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

function playSong() {
    musicContainer.classList.add("play");
    playBtn.querySelector("i.fas").classList.remove("fa-play");
    playBtn.querySelector("i.fas").classList.add("fa-pause");

    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");
    playBtn.querySelector("i.fas").classList.add("fa-play");

    audio.pause()
}

function prevSong() {
    songIndex--
    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    playSong()
}

function nextSong() {
    songIndex++
    if(songIndex > songs.length -1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    playSong()
}


function updateProgress(event) {
    const {duration, currentTime} = event.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`
}

function setProgress(event) {
    const width = this.clientWidth;
    const clickX = event.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

// event listener

playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.contains("play");
    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

// change song events

prevBtn.addEventListener("click", prevSong)
nextBtn.addEventListener("click", nextSong)

audio.addEventListener("timeupdate", updateProgress)

progressContainer.addEventListener("click", setProgress)