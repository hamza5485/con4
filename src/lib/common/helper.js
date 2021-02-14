export const PLAYERS = {
    AI: 'YELLOW',
    HUMAN: 'RED'
};

/**
 * checks if string appears n times in a row vertically, horizontally or diagonally
 * if exists, returns true with array index of each occurrence
 * @param {[][]} currentBoard - current board state
 * @param {string} moveToCheck - player to check victory against
 * @param {Number} n - number of occurrence to check
 */
export const checkForWin = (currentBoard, moveToCheck) => {
    for (let i = 0; i < currentBoard.length; i++) {
        for (let j = 0; j < currentBoard[i].length; j++) {
            // check horizontal (vertical on board GUI)
            if (currentBoard[i][j] === moveToCheck &&
                currentBoard[i][j + 1] === moveToCheck &&
                currentBoard[i][j + 2] === moveToCheck &&
                currentBoard[i][j + 3] === moveToCheck) {
                return {
                    isWin: true,
                    winningCord: [
                        [i, j],
                        [i, j + 1],
                        [i, j + 2],
                        [i, j + 3]
                    ]
                };
            }

            // vertical (horizontal on board GUI)
            // @ i >= 4, i++ will eventually lead to i being greated than index for example: 
            //      i=4, i+3 = 7 ~> error: index out of bounds
            //      i=5, i+2 = 7 ~> error: index out of bounds
            //      i=6, i+1 = 7 ~> error: index out of bounds
            if (i <= 3 &&
                currentBoard[i][j] === moveToCheck &&
                currentBoard[i + 1][j] === moveToCheck &&
                currentBoard[i + 2][j] === moveToCheck &&
                currentBoard[i + 3][j] === moveToCheck) {
                return {
                    isWin: true,
                    winningCord: [
                        [i, j],
                        [i + 1, j],
                        [i + 2, j],
                        [i + 3, j]
                    ]
                };
            }

            // descending diagonal
            if (i <= 3 &&
                currentBoard[i][j] === moveToCheck &&
                currentBoard[i + 1][j + 1] === moveToCheck &&
                currentBoard[i + 2][j + 2] === moveToCheck &&
                currentBoard[i + 3][j + 3] === moveToCheck) {
                return {
                    isWin: true,
                    winningCord: [
                        [i, j],
                        [i + 1, j + 1],
                        [i + 2, j + 2],
                        [i + 3, j + 3]
                    ]
                };
            }

            // ascending diagonal
            if (i <= 3 &&
                currentBoard[i][j] === moveToCheck &&
                currentBoard[i + 1][j - 1] === moveToCheck &&
                currentBoard[i + 2][j - 2] === moveToCheck &&
                currentBoard[i + 3][j - 3] === moveToCheck) {
                return {
                    isWin: true,
                    winningCord: [
                        [i, j],
                        [i + 1, j + 1],
                        [i + 2, j + 2],
                        [i + 3, j + 3]
                    ]
                };
            }
        }
    }

    return {
        isWin: false,
        winningCord: [] // do we need winning cordinate?
    };
};

/**
 * return true if empty space exists in borad else return false
 * @param {[][]} currentBoard -  current board state 
 */
export const containsEmptySpace = currentBoard => {
    for (let i = 0; i < currentBoard.length; i++) {
        for (let j = 0; j < currentBoard[i].length; j++) {
            if (currentBoard[i][j] === '')
                return true;
        }
    }
    return false;
};