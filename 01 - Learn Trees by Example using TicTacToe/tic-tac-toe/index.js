const players = {
    AI: 'X',
    HUMAN: 'O',
    TIE: 'tie'
};

const scores = {
    X: 100,
    O: -100,
    tie: 0
};

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

const nextMove = (x, y, el) => {
    if (isSpotAvailable(x, y, board)) {
        board[x][y] = players.HUMAN;
        applyMove(el, players.HUMAN);
        
        // It's the AI's turn.
        bestMove();
    }
}

const applyMove = (elementId, player) => {
    const el = document.getElementById(elementId);
    el.innerHTML = player;
    el.classList.add('occupied');
}

const clearBoard = () => {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    const allSpaces = document.querySelectorAll('.occupied');
    const resultsEl = document.getElementById('results');

    allSpaces.forEach(r => {
        r.innerText = '';
        r.classList.remove('occupied');
    });

    resultsEl.innerHTML = '';
}

const displayWinner = () => {
    const winner = checkWinner(board);
    const resultsEl = document.getElementById('results');
    let resultMessage = '';

    if (winner != null) {
        resultMessage = `${winner} WON!`;
    }

    if (winner === 'tie') {
        resultMessage = `It's a ${winner}`;
    }

    resultsEl.innerHTML = resultMessage;
}