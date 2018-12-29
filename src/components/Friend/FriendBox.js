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

});


class FriendBox extends React.Component {
    state = {

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <h2>Friend.</h2>
                <h4>Level</h4>
                <h4>Streak</h4>
            </div>
        );

    }
}

FriendBox.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FriendBox);