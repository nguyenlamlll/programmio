import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


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
    }
});


class PersonalProgress extends React.Component {
    state = {

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <h2>Personal Progress</h2>
                <Grid container justify='flex-start' alignItems='center'>
                    <Grid item xs={12} style={{ paddingLeft: 20 }}>
                        <Grid container justify='flex-start' alignItems='center' spacing={16}>
                            <p>Level</p>
                            <p>------</p>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{ paddingLeft: 20 }}>
                        <Grid container justify='flex-start' alignItems='center' spacing={16}>
                            <p>Streak</p>
                            <p>------</p>
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
            </div>
        );

    }
}

PersonalProgress.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonalProgress);