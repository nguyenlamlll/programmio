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
import CourseItem from './CourseItem';
import CourseHeader from './CourseHeader';

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
                <CourseHeader title={this.props.courseTitle} backClick={this.props.handleBackClick}/>
                <Grid container>
                    {/* <Grid item xs={2}>
                        <p onClick={this.props.handleBackClick}>Back</p>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant="h4" align="left">
                            {this.props.courseTitle}
                        </Typography>
                        <Divider />
                    </Grid> */}
                    <Grid item xs={12}>
                        <List>
                            <CourseItem lessonNumber="01" title="What is programming in general?"/>
                            <CourseItem lessonNumber="02" title="Something Else but you know it's harder"/>
                            <CourseItem lessonNumber="03" title="Basic logic turns into a program"/>
                            <CourseItem lessonNumber="04" title="Sorts: What Types There Are & Which One To Choose?"/>
                            <CourseItem lessonNumber="05" title="Sorts: What Types There Are & Which One To Choose?"/>
                            <CourseItem lessonNumber="06" title="Sorts: What Types There Are & Which One To Choose?"/>
                            <CourseItem lessonNumber="07" title="Sorts: What Types There Are & Which One To Choose?"/>
                            <CourseItem lessonNumber="08" title="Summary of What We Have Learned"/>
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