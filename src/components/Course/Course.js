import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

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
                        <p onClick={this.props.handleBackClick}>Back</p>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant="h4" align="left">
                            {this.props.courseTitle}
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <List component="nav">
                            <Grid container>
                                <Grid item xs={11}>
                                    <ListItem button>
                                        <ListItemText primary="Lesson 01: What is programming in general?" />
                                    </ListItem>
                                </Grid>
                                <Grid item xs={1}>
                                    <Checkbox/>
                                </Grid>
                            </Grid>
                            <ListItem button>
                                <ListItemText primary="Lesson 02: Basic logic turns into a program" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Lesson 03: Basic logic turns into a program" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Lesson 04: Basic logic turns into a program" />
                            </ListItem>
                        </List>
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