import { makeStyles } from '@material-ui/core';
import React from 'react';
import { red, yellow } from '@material-ui/core/colors';
import { PLAYERS } from '../../../lib/common/helper';

const useStyles = makeStyles(theme => ({
    circle: {
        cursor: 'pointer',
        borderRadius: '50%',
        [theme.breakpoints.down('xs')]: {
            width: `27px`,
            height: `27px`,
        },
        [theme.breakpoints.up('sm')]: {
            width: `25px`,
            height: `25px`,
        },
        [theme.breakpoints.up('md')]: {
            width: `50px`,
            height: `50px`,
        },
        [theme.breakpoints.up('lg')]: {
            width: `75px`,
            height: `75px`,
        },
        [theme.breakpoints.up('xl')]: {
            width: `75px`,
            height: `75px`,
        },
    },
}));

const Piece = props => {
    const classes = useStyles();

    return (
        <div>
            {props.player === PLAYERS.HUMAN && <div className={classes.circle} style={{ backgroundColor: red[300], border: `4px double ${red[900]}` }} />}
            {props.player === PLAYERS.AI && <div className={classes.circle} style={{ backgroundColor: yellow[300], border: `4px double ${yellow[900]}` }} />}
            {props.player === '' && <div className={classes.circle} style={{ backgroundColor: `white`, border: `4px double black` }} />}
        </div>
    );
};

export default Piece;