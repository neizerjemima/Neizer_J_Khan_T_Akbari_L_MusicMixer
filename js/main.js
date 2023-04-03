let characters = document.querySelectorAll(".characterHold"), 
    gameBoard = document.querySelector(".drop-board"),
    dropZone = document.querySelectorAll(".dropZone"),
    characterBoard = document.querySelector(".character-pieces"),
    theAudioEl = document.querySelector("audio"),
    character_Audio = document.querySelectorAll(".characterHold"),
    playButton = document.querySelector("#playButton"),
    pauseButton = document.querySelector("#pauseButton"),
    rewindButton = document.querySelector("#rewindButton"),
    reloadPage = document.querySelector("#resetPage"),
    scroll = document.querySelector("#scroller"),
    volSlider = document,

    draggedPiece;

const characterPieces = [...document.querySelectorAll('.character-pieces')],
    upBtn = [...document.querySelectorAll('.up-btn')],
    downBtn = [...document.querySelectorAll('.down-btn')];


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
    
    draggedPiece.classList.add('small');

    this.appendChild(draggedPiece);


    var frog = document.querySelector(".dropZone div#frog"),
    smRed = document.querySelector(".dropZone div#smRed"),
    toad = document.querySelector(".dropZone div#toad");
    
    if (frog) {    
    frog.classList.add('frog');

    let childFrog = document.getElementById("frog").children[0];
 	childFrog.className = `small invisible`;

     frog.style.width = "127px";
     frog.style.height = "200px";
    }

    if (smRed) {
     smRed.classList.add('smRed')    
    let childSmRed = document.getElementById("smRed").children[0];
    childSmRed.className = `small invisible`;

    smRed.style.width = "120px";
    smRed.style.height = "130px";
    }
   
    if (toad) {
    toad.classList.add('toad');

    let childToad = document.getElementById("toad").children[0];
	childToad.className = `small invisible`;

    toad.style.width = "120px";
    toad.style.height = "140px";
    }
    // debugger;

}





function loadAudio() {
    theAudioEl.src = `A_udio/${this.dataset.trackref}.mp3`;
    console.log('playing music', this);
    theAudioEl.load();

    playAudio();
    
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


// volume number
function rangeSlider(value){
    document.getElementById('rangeValue').innerHTML = value;
}

// volume button 
function clicked() {
    if(volumeControl==1){
        document.getElementById("volumeControl").style.display="inline"
        return volumeControl=0;
    }else{
        document.getElementById("volumeControl").style.display="none"
        return volumeControl=1;
    }
}



// child.forEach(piece => piece.addEventListener("drop", hideImage));
characters.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));
dropZone.forEach(zone =>zone.addEventListener("dragover", handleDragOver));
dropZone.forEach(zone => zone.addEventListener("drop", handleDrop));
character_Audio.forEach(song => song.addEventListener("click", loadAudio));
playButton.addEventListener("click", playAudio);
pauseButton.addEventListener("click", pauseAudio);
rewindButton.addEventListener("click", rewindAudio);
reloadPage.addEventListener("click", resetPage);
volSlider.addEventListener('change', setVolume)
characterPieces.forEach((item, i) => {
    let characterDimensions = item.getBoundingClientRect();
    let characterHeight = characterDimensions.height;

    upBtn[i].addEventListener('click', () => {
        item.scrollTo(0, 0) += characterHeight;
    })

    downBtn[i].addEventListener('click', () => {
        item.scrollTop += characterHeight;
    })
})
// anima.forEach. addEventListener('drop', toad);

// scroll up and down

