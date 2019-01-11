import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

import { BASE_NAME } from '../../Config';

const styles = theme => ({
    root: {
        flexGrow: 1,
        background: 'rgba(255, 255, 255, 1)',
        height: '650px',
        marginTop: '10px'
    },
    nextButton: {
        background: '#50B8F3',
        borderRadius: '15px',
        width: '150px',
        position: 'absolute',
        bottom: '0',
        left: '10'
    }
});

class CourseContent extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        index: 0,
        question: "Blah blah, this is just another sample question. The real questions for the course will be defined later."
    }

    handleNextClick = () => {
        if (this.state.index <= 0) {
            this.setState({
                question: "This is some new question. Blah blah.",
                index: 1
            });
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <main>
                <Grid container spacing={16}>
                    <Grid item sm={2} lg={2}>
                    </Grid>
                    <Grid item xs={11} sm={7} lg={7} style={{ position: 'relative' }}>
                        <div className={classes.root}>
                            <div style={{ paddingTop: 10 }}>
                                <h2>{this.state.question}</h2>
                            </div>
                            <div>
                                <Grid container>
                                    <Grid item lg={2} />
                                    <Grid item xs={3} lg={1}>
                                        <Checkbox />
                                    </Grid>
                                    <Grid item xs={9} lg={9}>
                                        <ListItem button component={Link} to={`${BASE_NAME}/course_id`}>
                                            <ListItemText primary={`We can eat the whole lot of love. I ensure this is the answer`} />
                                        </ListItem>
                                    </Grid>

                                    <Grid item lg={2} />
                                    <Grid item xs={3} lg={1}>
                                        <Checkbox />
                                    </Grid>
                                    <Grid item xs={9} lg={9}>
                                        <ListItem button component={Link} to={`${BASE_NAME}/course_id`}>
                                            <ListItemText primary={`Sometimes, love answers everything.`} />
                                        </ListItem>
                                    </Grid>

                                    <Grid item lg={2} />
                                    <Grid item xs={3} lg={1}>
                                        <Checkbox />
                                    </Grid>
                                    <Grid item xs={9} lg={9}>
                                        <ListItem button component={Link} to={`${BASE_NAME}/course_id`}>
                                            <ListItemText primary={`Better luck next time. `} />
                                        </ListItem>
                                    </Grid>

                                    <Grid item lg={2} />
                                    <Grid item xs={3} lg={1}>
                                        <Checkbox />
                                    </Grid>
                                    <Grid item xs={9} lg={9}>
                                        <ListItem button component={Link} to={`${BASE_NAME}/course_id`}>
                                            <ListItemText primary={`In much wisdom, is much grief. He who finds knowledge, he who finds sorrow.`} />
                                        </ListItem>
                                    </Grid>

                                </Grid>
                            </div>

                            <Grid container justify='center' alignItems='center'>
                                <Grid item xs={12}>
                                    {this.state.index == 0 && (
                                        <Button variant="contained" color='primary' className={classes.nextButton}
                                            onClick={this.handleNextClick}>
                                            Next
                                        </Button>
                                    )}
                                    {this.state.index == 1 && (
                                        <Button variant="contained" color='primary' className={classes.nextButton}
                                            component={Link} to={{ pathname: '/', state: {
                                                fromCourseContent: true,
                                                isCourseShowing: true
                                            }}}>
                                            Finish
                                        </Button>
                                    )}
                                </Grid>
                            </Grid>

                        </div>
                    </Grid>

                    <Grid item xs={12} sm={2} lg={2}>

                    </Grid>
                </Grid>
            </main>
        );

    }
}

CourseContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseContent);