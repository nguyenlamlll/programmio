import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import fire from '../../assets/fire.png';
import colors from './../../colors';

const styles = theme => ({
    root: {
        flexGrow: 1,
        background: 'rgba(255, 255, 255, 1)'
    },
    achievementBox: {
        width: '49px',
        height: '49px',
        left: '208px',
        top: '162px',
        background: '#C4C4C4',
        borderRadius: '7px'
    },
    backgroundLevelBar: {
        background: '#E5E5E5',
        borderRadius: '15px',
        width: '167px',
        height: '12px'
    },
    foregroundLevelBar: {
        background: '#50B8F3',
        borderRadius: '15px',
        width: '60px',
        height: '12px'
    },
    streak: {
        backgroundImage: 'url(//d35aaqx5ub95lt.cloudfront.net/images/icon-sprite8.svg)',
        backgroundSize: '1500px',
        backgroundPosition: '-47px -56px',
        width: '30px',
        height: '49px'
    },
    header: {
        textAlign: 'left',
        marginTop: '10px'
    },
    viewMoreButton: {
        backgroundColor: colors.complimentLight,
        borderRadius: '0',
        width: '168px',
        heigth: '33px'
    }
});


class PersonalProgress extends React.Component {
    state = {

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div>
                    <h3 className={classes.header}>
                        Personal Progress
                    </h3>
                </div>
                <Grid container justify='flex-start' alignItems='center'>
                    <Grid item xs={12} style={{ paddingLeft: 20 }}>
                        <Grid container justify='flex-start' alignItems='center' spacing={8}>
                            <Grid item xs={2} md={2}>
                                <p>Level</p>
                            </Grid>
                            <Grid item xs={12} md={10}>
                                <div className={classes.backgroundLevelBar}>
                                    <div className={classes.foregroundLevelBar}>
                                    </div>
                                </div>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{ paddingLeft: 20 }}>
                        <Grid container justify='flex-start' alignItems='center' spacing={8}>
                            <Grid item xs={2} md={2}>
                                <p>Streak</p>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Grid container style={{ paddingLeft: 15 }}>
                                    <Grid item xs={3}>
                                        <img src={fire} width="40"/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <p>10</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} style={{ paddingLeft: 20 }}>
                        <Grid container justify='flex-start' alignItems='center' spacing={16}>
                            <p>Achievement</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={8} justify='center' alignItems='center' >
                    {[0, 1, 2, 3, 4, 5, 6, 7].map(value => (
                        <Grid key={value} item>
                             <div className={classes.achievementBox}></div>
                        </Grid>
                    ))}
                </Grid>
                <Grid container justify='center' alignItems='center'>
                    <Grid item style={{ margin: 10}}>
                        <Button variant="contained" color='primary' className={classes.viewMoreButton}>
                            View More
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );

    }
}

PersonalProgress.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonalProgress);