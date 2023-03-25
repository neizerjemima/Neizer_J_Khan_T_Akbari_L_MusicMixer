let characters = document.querySelectorAll(".characterHold"), 
    gameBoard = document.querySelector(".drop-board"),
    dropZone = document.querySelectorAll(".dropZone"),
    characterBoard = document.querySelector(".character-pieces"),
    theAudioEl = document.querySelector("A_udio"),
    playButton = document.querySelector("#playButton"),
    pauseButton = document.querySelector("#pauseButton"),
    rewindButton = document.querySelector("#rewindButton"),
    reloadPage = document.querySelector("#resetPage"),
    volSlider = document;
    // child = document.querySelectorAll(".img");

    // anima = document.querySelector(".characterHold"),
    // draggedPiece; 

this

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
        characterBoard.appendChild(existingPiece);
       
    }
    draggedPiece.style.width = "127px";
    draggedPiece.style.height = "222.4px";
    draggedPiece.classList.add('small');

    this.appendChild(draggedPiece);


    var frog = document.querySelector(".dropZone div#frog"),
    smRed = document.querySelector(".dropZone div#smRed"),
    toad = document.querySelector(".dropZone div#toad");
    
    if (frog) {    
    frog.classList.add('frog');

    let childFrog = document.getElementById("frog").children[0];
 	childFrog.className = `small invisible`;
    }

    if (smRed) {
     smRed.classList.add('smRed')    
    let childSmRed = document.getElementById("smRed").children[0];
    childSmRed.className = `small invisible`;
    }
   
    if (toad)
    toad.classList.add('toad');

    let childToad = document.getElementById("toad").children[0];
	childToad.className = `small invisible`;

    // debugger;

}





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



// child.forEach(piece => piece.addEventListener("drop", hideImage));
characters.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));
dropZone.forEach(zone =>zone.addEventListener("dragover", handleDragOver));
dropZone.forEach(zone => zone.addEventListener("drop", handleDrop));
playButton.addEventListener("drop", playAudio);
pauseButton.addEventListener("click", pauseAudio);
rewindButton.addEventListener("click", rewindAudio);
reloadPage.addEventListener("click", resetPage);
volSlider.addEventListener('change', setVolume)

// anima.forEach. addEventListener('drop', toad);