import React from 'react';

import styles from './Cards.module.css';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';

const Cards = ({ data: {positive, death, dateChecked, totalTestResults}}) => {

    if (!positive){
        return '...loading'
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} className={styles.positive}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Positive Cases</Typography>
                        <Typography variant="h5">{positive}</Typography>
                        <Typography color="textSecondary">{new Date(dateChecked).toDateString()}</Typography>
                        <Typography variant="body2">Number of Positive Cases thus far</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} className={styles.death}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death Cases</Typography>
                        <Typography variant="h5">{death}</Typography>
                        <Typography color="textSecondary">{new Date(dateChecked).toDateString()}</Typography>
                        <Typography variant="body2">Number of Death Cases thus far</Typography>
                    </CardContent>
                </Grid>
        
                <Grid item component={Card} className={styles.totalResult}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Total Result Cases</Typography>
                        <Typography variant="h5">{totalTestResults}</Typography>
                        <Typography color="textSecondary">{new Date(dateChecked).toDateString()}</Typography>
                        <Typography variant="body2">Number of Total Cases thus far</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;

