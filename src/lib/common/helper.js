export const PLAYERS = {
    AI: 'YELLOW',
    HUMAN: 'RED'
};

export const checkForWin = (currentBoard, moveToCheck) => {

    return {
        isWin: false,
        winningCord: []
    };
};

export const containsEmptySpace = currentBoard => {
    for (let i = 0; i < currentBoard.length; i++) {
        for (let j = 0; j < currentBoard[i].length; j++) {
            if (currentBoard[i][j] === '')
                return true;
        }
    }
    return false;
};