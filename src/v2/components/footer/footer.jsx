import { Grid, Typography } from '@material-ui/core'
import React from 'react';
import { COPYRIGHT, VERSION } from '../../assets/constant';
import useStyles from './style';

const Footer = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.footer} justifyContent='space-evenly' alignItems='center'>
            <Grid item>
                <Typography variant='subtitle1' className={classes.text}>
                    {COPYRIGHT}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant='subtitle1' className={classes.text}>
                    {VERSION}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Footer
