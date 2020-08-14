const minimax = (grid, depth, isMaximizing) => {
    const winner = checkWinner(grid);

    if (winner !== null) {
        return scores[winner];
    }


    if (isMaximizing) {
        let bestScore = Number.MIN_SAFE_INTEGER;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (isSpotAvailable(i, j, grid)) {
                    grid[i][j] = players.AI;
                    let score = minimax(grid, depth++, false);
                    grid[i][j] = '';
                    bestScore = Math.max(score, bestScore);
                    
                }
            }
        }
        return bestScore;
    } else {
        let bestScore = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (isSpotAvailable(i, j, grid)) {
                    grid[i][j] = players.HUMAN;
                    let score = minimax(grid, depth++, true);
                    grid[i][j] = '';
                    bestScore = Math.min(score, bestScore);
                }
            }
        }

        return bestScore;
    }
   
}

const isSpotAvailable = (x, y, grid) => grid[x][y] === '';

const bestMove = () => {
    let boardCopy = JSON.parse(JSON.stringify(board));
    let highestScore = Number.MIN_SAFE_INTEGER;
    let winningMove;

   for (let i = 0; i < 3; i++) {
       for (let j = 0; j < 3; j++) {
           // is spot available?
           if (isSpotAvailable(i, j, boardCopy)) {
            boardCopy[i][j] = players.AI;
            let score = minimax(boardCopy, 0, false);
            boardCopy[i][j] = '';
            
            if (score > highestScore) {
                highestScore = score;
                winningMove = { i, j };
            }

           }
       }
   }

   if (winningMove) {
       board[winningMove.i][winningMove.j] = players.AI;
       applyMove(`block_${winningMove.i}${winningMove.j}`, players.AI);
   }

   displayWinner();
}

const checkWinner = (grid) => {
    let winner = null;
    

    // Horizontal Win
    for (let i = 0; i < 3; i++) {
        if (areEqual([grid[i][0], grid[i][1], grid[i][2]])) {
            winner = grid[i][0];
        }
    }

    // Vertical
    for (let i = 0; i < 3; i++) {
        if (areEqual([grid[0][i], grid[1][i], grid[2][i]])) {
            winner = grid[0][i];
        }
    }

    // Diagonal Win to the right
    if (areEqual([grid[0][0], grid[1][1], grid[2][2]])) {
        winner = grid[0][0];
    }

    // Diagonal Win to the left
    if (areEqual([grid[2][0], grid[1][1], grid[0][2]])) {
        winner = grid[2][0];
    }

    let availableSpots = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[i][j] == '') {
                availableSpots++;
            }
        }
    }

    if (winner == null && openSpots == 0) {
        return players.TIE;
    } else {
        return winner;
    }
}


const areEqual = (values) => {
    return values.every(value => value !== null && value !== '' && value === values[0]);
}

