import React, { useEffect } from 'react';
import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, Typography } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { PLAYERS } from '../../../lib/common/helper';
const Piece = React.lazy(() => import('../Piece'));



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
    formControl: {
        margin: theme.spacing(2, 1, 1, 1),
        minWidth: 120,
    },
}));

const Board = () => {
    const classes = useStyles();
    const [playerTurn, setPlayerTurn] = React.useState(PLAYERS.HUMAN);
    const [depth, setDepth] = React.useState(3);
    const [status, setStatus] = React.useState(`Your Turn`);
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

    const handleDepthChange = e => setDepth(e.target.value);

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

    const restartGame = () => window.location.reload();

    return (
        <Grid container alignItems="center" justify="center" direction="column">
            <Grid className={classes.gridMargin} container alignItems="center" justify="center" direction="row">
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Depth</InputLabel>
                    <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" value={depth} onChange={handleDepthChange} label="Depth">
                        {[3, 4, 5, 6, 7, 8, 9].map(val => <MenuItem key={val} selected={val === depth ? true : false} value={val}>{val}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
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
            <Grid className={classes.gridMargin} container alignItems="center" justify="center" direction="row">
                <Typography variant="h4" gutterBottom>
                    {status}
                </Typography>
            </Grid>
            <Grid className={classes.gridMargin} container alignItems="center" justify="center" direction="row">
                <Button variant="contained" onClick={restartGame}>
                    Restart
                </Button>
            </Grid>
        </Grid>
    );
};

export default Board;