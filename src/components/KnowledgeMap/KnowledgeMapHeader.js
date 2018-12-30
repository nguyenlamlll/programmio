import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import colors from './../../colors';

const styles = theme => ({
    root: {
        flexGrow: 1,
        textAlign: 'left',
        marginLeft: '5px'
    },
    editButton: {
        backgroundColor: colors.complimentLight,
        borderRadius: '0',
        width: '95px',
        heigth: '33px'
    }
});


class KnowledgeMapHeader extends React.Component {
    state = {

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container justify='center' alignItems='center'>
                    <Grid item xs={12} md={9}>
                        <h1>Objective: Front-end Web Developer</h1>
                    </Grid>
                    <Grid item xs={12} md={2}
                        container justify='flex-end'>
                        <Grid item xs={12} sm={12} md={10} lg={7}>
                            <Button variant="contained" color='primary' className={classes.editButton}>
                                Edit
                            </Button>
                        </Grid>
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