let Birds = document.querySelectorAll(".character-pieces img"),
    birdBoard = document.querySelector(".drop-board"),
    dropzones = document.querySelectorAll(".dropZone"),
    piecesBoard = document.querySelector(".character-pieces"),

    draggedPiece; 


function handleStartDrag() {
    console.log('started dragging this piece:', this);
    draggedPiece = this;
        
}


function handleDragOver(e) { 
    e.preventDefault();
    console.log('dragged over me');
}

function handleDrop(e) {
    e.preventDefault();
    console.log('dropped a birdie');
    if (this.children.length > 0) {
        let existingPiece = this.children[0];
        existingPiece.classList.remove('small');
        piecesBoard.appendChild(existingPiece);
    }
    
    draggedPiece.style.width = "127px"
    draggedPiece.style.height = "160px"
    draggedPiece.classList.add('small');
    this.appendChild(draggedPiece);
}

Birds.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));
dropzones.forEach(zone =>zone.addEventListener("dragover", handleDragOver));
dropzones.forEach(zone => zone.addEventListener("drop", handleDrop));
