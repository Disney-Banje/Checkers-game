document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const squares = [];
    const rows = 8;
    const cols = 8;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.classList.add((row + col) % 2 === 0 ? 'light' : 'dark');
            board.appendChild(square);
            squares.push(square);
        }
    }

    console.log(squares.length);

    // Initial placement of pieces
    for (let i = 0; i < 64; i++) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        if (i < 16) {
            piece.classList.add('black');
            squares[i].appendChild(piece);
        } else if ( i >= 32) {
            piece.classList.add('red');
            squares[i + 16].appendChild(piece);
        }
    }


});