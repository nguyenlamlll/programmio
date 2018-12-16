import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
        textAlign: 'left',
        marginLeft: '5px'
    },
});


class KnowledgeMapHeader extends React.Component {
    state = {

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container justify='center' alignItems='center'>
                    <Grid item xs={9}>
                        <h1>Current Objective: Front-end Web Developer</h1>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" color="primary">Edit</Button>
                    </Grid>
                </Grid>
            </div>
        );

    }
}

KnowledgeMapHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KnowledgeMapHeader);