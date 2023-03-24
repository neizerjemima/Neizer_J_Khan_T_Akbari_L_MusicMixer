let Birds = document.querySelectorAll(".character-pieces div"),
    birdBoard = document.querySelector(".drop-board"),
    dropzones = document.querySelectorAll(".dropZone"),
    piecesBoard = document.querySelector(".character-pieces"),
    theAudioEl = document.querySelector("A_udio"),
    playButton = document.querySelector("#playButton"),
    pauseButton = document.querySelector("#pauseButton"),
    rewindButton = document.querySelector("#rewindButton"),
    reloadPage = document.querySelector("#resetPage"),
    volSlider = document,
    anima = document.querySelector(".characterHold"),
    draggedPiece; 


function handleStartDrag() {
    console.log('started dragging this piece:', this);
    draggedPiece = this;
        
}

function handleDragOver(e) { 
    e.preventDefault();
    console.log('dragged over me');
}

function resetPage() {
    document.location.reload();
}



function handleDrop(e) {
    e.preventDefault();
    console.log('dropped a birdie');
    if (this.children.length > 0) {
        let existingPiece = this.children[0];
        existingPiece.classList.remove('small');
        piecesBoard.appendChild(existingPiece);
    }

     // let child = document.querySelectorAll("characterHold img");

    // child.classList.add('anim');

    
    draggedPiece.style.width = "127px"
    draggedPiece.style.height = "160px"
    draggedPiece.classList.add('small');
    this.appendChild(draggedPiece);
}

// function removeImage(e) {

// }



function playAudio () {
    let currentSrc = `A_udio/${this.dataset.trackref}.mp3`;

    theAudioListener.src = currentSrc;

    theAudioEl.play();
}

function playAudio() {theAudioEl.play(); }

function pauseAudio() {theAudioEl.pause(); }

function rewindAudio() { theAudioEl.currentTime = 0; }

function setVolume() {
    //get the numeric value of the volume slider between 0 (min) and 100 (max)
    //and then set the audio element's volume level to match
    console.log(this.value);

    //divide the value by 100 to get a floating point number
    theAudioEl.volume = this.value/100;
}



// child.forEach(piece => piece.addEventListener("drop", removeImage));
Birds.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));
dropzones.forEach(zone =>zone.addEventListener("dragover", handleDragOver));
dropzones.forEach(zone => zone.addEventListener("drop", handleDrop));
playButton.addEventListener("drop", playAudio);
pauseButton.addEventListener("click", pauseAudio);
rewindButton.addEventListener("click", rewindAudio);
reloadPage.addEventListener("click", resetPage);
volSlider.addEventListener('change', setVolume)

// anima.forEach. addEventListener('drop', toad);