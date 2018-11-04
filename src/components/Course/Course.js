import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({

});

class Course extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {

    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container>
                    <Grid item xs={2}>
                        <p>Back</p>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant="h4">
                            {this.props.courseTitle}
                        </Typography>
                        <Divider />
                    </Grid>
                </Grid>

            </div>
        );

    }
}

Course.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Course);