import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({

});

class CourseItem extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {

    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container>
                <Grid item xs={11}>
                    <ListItem button>
                        <ListItemText primary={`Lesson ${this.props.lessonNumber}: ${this.props.title}`} />
                    </ListItem>
                </Grid>
                <Grid item xs={1}>
                    <Checkbox />
                </Grid>
            </Grid>
        );

    }
}

CourseItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseItem);