
// Drag & Drop elements
let characters = document.querySelectorAll(".characterHold, .small"), 
    gameBoard = document.querySelector(".drop-board"),
    dropZone = document.querySelectorAll(".dropZone"),
    characterBoard = document.querySelector(".character-pieces"),
// Audio elements
    audio1 = document.createElement("audio"),
    audio2 = document.createElement("audio"),
    audio3 = document.createElement("audio"),
    audio4 = document.createElement("audio"),
    audio5 = document.createElement("audio"),
    audio6 = document.createElement("audio"),
    character_Audio = document.querySelectorAll(".characterHold img"),
// Control / button elements
    playButton = document.querySelector("#playButton"),
    pauseButton = document.querySelector("#pauseButton"),
    rewindButton = document.querySelector("#rewindButton"),
    reloadPage = document.querySelector("#resetPage"),
    scroll = document.querySelector("#scroller"),
    volSlider = document,
    howToButton = document.querySelector("#howTo-Btn"),
    howToPlay = document.querySelector("#extra"),
    closeBtn = document.querySelector("#extra button"),
    draggedPiece = null;

const characterPieces = [...document.querySelectorAll('.character-pieces')],
    upBtn = [...document.querySelectorAll('.up-btn')],
    downBtn = [...document.querySelectorAll('.down-btn')];

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

}

function playAudio() {

    var frog = document.querySelector(".dropZone div#frog"),
    blue = document.querySelector(".dropZone div#blue"),
    red = document.querySelector(".dropZone div#red"),
    smRed = document.querySelector(".dropZone div#smRed"),
    squirrel = document.querySelector(".dropZone div#squirrel"),
    toad = document.querySelector(".dropZone div#toad");
    
    if (blue) {    
        blue.classList.add('blue');
    
        let childBlue = document.getElementById("blue").children[0];
         childBlue.className = `small invisible`;
    
         blue.style.width = "127px";
         blue.style.height = "200px";

         audio1.src = `audio/Sound_1.mp3`;
        audio1.load()
        
        audio1.play();

        }

    if (frog) {    
        frog.classList.add('frog');
    
        let childFrog = document.getElementById("frog").children[0];
            childFrog.className = `small invisible`;
    
            frog.style.width = "127px";
            frog.style.height = "200px";
    
            audio2.src = `audio/Sound_2.mp3`;
            audio2.load()
    audio2.play();
    
        }
    if (red) {    
        red.classList.add('red');
    
        let childRed = document.getElementById("red").children[0];
            childRed.className = `small invisible`;
    
            red.style.width = "127px";
            red.style.height = "200px";
            audio3.src = `audio/Sound_3.mp3`;
        audio3.load()
    audio3.play(); 
        }
    if (smRed) {
        smRed.classList.add('smRed')    
        let childSmRed = document.getElementById("smRed").children[0];
        childSmRed.className = `small invisible`;
    
        smRed.style.width = "120px";
        smRed.style.height = "130px";
        audio4.src = `audio/Sound_4.mp3`;
            audio4.load()
    
        audio4.play();

        }
       
    if (squirrel) {
        squirrel.classList.add('squirrel')    
        let childSquirrel = document.getElementById("squirrel").children[0];
        childSquirrel.className = `small invisible`;
    
        squirrel.style.width = "200px";
        squirrel.style.height = "200px";
        audio5.src = `audio/Sound_5.mp3`;
        audio5.load();
    
    audio5.play();

        }
        
    if (toad) {
    toad.classList.add('toad');

    let childToad = document.getElementById("toad").children[0];
    childToad.className = `small invisible`;

    toad.style.width = "120px";
    toad.style.height = "140px";
    audio6.src = `audio/Sound_6.mp3`;
        audio6.load()

    audio6.play(); 

    }
}

function pauseAudio() {
    if (blue) {    
        blue.classList.remove('blue');
    
        let childBlue = document.getElementById("blue").children[0];
         childBlue.className = `small`;
    audio1.pause();
        }
    if (frog) {    
        frog.classList.remove('frog');
    
        let childFrog = document.getElementById("frog").children[0];
            childFrog.className = `small`;
    audio2.pause();

        }
    if (red) {    
        red.classList.remove('red');
    
        let childRed = document.getElementById("red").children[0];
            childRed.className = `small`;
    audio3.pause(); 

        }
    if (smRed) {
        smRed.classList.remove('smRed')    
        let childSmRed = document.getElementById("smRed").children[0];
        childSmRed.className = `small`;

    audio4.pause();

        }
           
    if (squirrel) {
        squirrel.classList.remove('squirrel')    
        let childSquirrel = document.getElementById("squirrel").children[0];
        childSquirrel.className = `small`;
    audio5.pause();

        }
            
    if (toad) {
    toad.classList.remove('toad');

    let childToad = document.getElementById("toad").children[0];
    childToad.className = `small`;
audio6.pause(); 

    }
 }

function rewindAudio() { 
    audio1.currentTime = 0;
    audio2.currentTime = 0;
    audio3.currentTime = 0; 
    audio4.currentTime = 0;
    audio5.currentTime = 0;
    audio6.currentTime = 0; 
}

function setVolume() {
    //get the numeric value of the volume slider between 0 (min) and 100 (max)
    //and then set the audio element's volume level to match
    console.log(this.value);

    audio1.volume = this.value/100;
    audio2.volume = this.value/100;
    audio3.volume = this.value/100; 
    audio4.volume = this.value/100;
    audio5.volume = this.value/100;
    audio6.volume = this.value/100; 
}

function clicked() {
    if(volumeControl==1){
        document.getElementById("volumeControl").style.display="inline"
        return volumeControl=0;
    }else{
        document.getElementById("volumeControl").style.display="none"
        return volumeControl=1;
    }
}

function loadHowToPlay() {
    if (howToPlay.style.display="none") {
        howToPlay.style.display="grid"
    }
}

function closeBox() {
    if (howToPlay.style.display="grid") {
        howToPlay.style.display="none"
    }
}

// change volume

function setVolume() {
    const volume = volumeControl.value / 100;
    audioLoops.forEach(audio => {
        audio.volume = volume;
    });
}



characters.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));
dropZone.forEach(zone =>zone.addEventListener("dragover", handleDragOver));
dropZone.forEach(zone => zone.addEventListener("drop", handleDrop));
playButton.addEventListener("click", playAudio);
pauseButton.addEventListener("click", pauseAudio);
rewindButton.addEventListener("click", rewindAudio);
reloadPage.addEventListener("click", resetPage);

howToButton.addEventListener("click",loadHowToPlay);
closeBtn.addEventListener("click", closeBox);

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
});



