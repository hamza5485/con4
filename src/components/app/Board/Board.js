import React, { useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Piece from '../Piece/Piece';
import { blue } from '@material-ui/core/colors';
import { PLAYERS } from '../../../lib/common/helper';



const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        backgroundColor: blue[900],
        borderRadius: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            width: `320px`,
        },
        [theme.breakpoints.up('sm')]: {
            width: `425px`,
        },
        [theme.breakpoints.up('md')]: {
            width: `768px`,
        },
        [theme.breakpoints.up('lg')]: {
            width: `1000px`,
        }
    },
    column: {
        backgroundColor: blue[900],
        margin: theme.spacing(1),
    },
    row: {
        textAlign: '-webkit-center',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
}));

const Board = () => {
    const classes = useStyles();
    const [playerTurn, setPlayerTurn] = React.useState(PLAYERS.HUMAN);
    const [board, setBoard] = React.useState(() => {
        let b = [];
        for (let i = 0; i < 7; i++) { // cols
            let col = [];
            for (let j = 0; j < 6; j++) { // rows
                col.push('')
            }
            b.push(col);
        }
        return b;
    });

    useEffect(() => {
        console.log(board);
    }, [board]);

    const playerClick = col => playerTurn === PLAYERS.HUMAN && makeMove(col);

    const makeMove = col => {
        let currentBoard = [...board];
        for (let i = currentBoard[col].length; i--;) {
            if (currentBoard[col][i] === '') {
                currentBoard[col][i] = playerTurn;
                break;
            }
        }
        setBoard(currentBoard);
        setPlayerTurn(playerTurn === PLAYERS.HUMAN ? PLAYERS.AI : PLAYERS.HUMAN);
    };


    return (
        <Grid container alignItems="center" justify="center" direction="column">
            <Grid container className={classes.root} alignItems="center" justify="center">
                {board.map((column, colIndex) => (
                    <Grid item xs={1} key={colIndex} className={classes.column} onClick={() =>/* playerClick(colIndex)*/ makeMove(colIndex)}>
                        {column.map((row, rowIndex) => (
                            <Grid item xs={12} key={rowIndex} className={classes.row}>
                                <Piece player={row} />
                            </Grid>
                        ))}
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default Board;