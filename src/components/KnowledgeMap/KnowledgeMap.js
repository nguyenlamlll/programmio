import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Course from '../Course/Course';
import KnowledgeNode from './KnowledgeNode';
import KnowledgeMapHeader from './KnowledgeMapHeader';

import './KnowledgeMap.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
        // display: 'inline-block',
        // position: 'fixed',
        // top: '0',
        // bottom: '0',
        // right: '0',
        // left: '0',
        // margin: 'auto',
        // width: '30em',
        // height: '10em'
        // position: 'absolute',
        // width: '940px',
        // left: 'calc(50% - 940px/2)',
        // top: '178px',
        // bottom: '45px',
        background: 'rgba(255, 255, 255, 1)',
        height: '650px',
        marginTop: '10px'
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});


class KnowledgeMap extends React.Component {
    state = {
        isShowing: true,
        isCourseShowing: false,
        courseTitle: ""
    }

    handleStartLearning = (title) => {
        console.log(title);
        this.setState({
            isShowing: false,
            isCourseShowing: true,
            courseTitle: title
        });
        console.log(this.state);
    };
    
    handleBackClick = () => {
        this.setState({
            isShowing: true,
            isCourseShowing: false,
            courseTitle: ""
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {this.state.isShowing && (
                    <div className={``}>
                        <KnowledgeMapHeader/>
                        <Grid container spacing={8}>
                            <Grid item xs={4}>
                                <KnowledgeNode title='Basic' onStartLearningClick={this.handleStartLearning} />
                            </Grid>
                            <Grid item xs={4}>
                                <KnowledgeNode title='Algorithm' onStartLearningClick={this.handleStartLearning} />
                            </Grid>
                            <Grid item xs={4}>
                                <KnowledgeNode title='Structures' onStartLearningClick={this.handleStartLearning} />
                            </Grid>
                            <Grid item xs={4}>
                                <KnowledgeNode title='Logic' onStartLearningClick={this.handleStartLearning} />
                            </Grid>
                            <Grid item xs={4}>
                                <KnowledgeNode title='Script' onStartLearningClick={this.handleStartLearning} />
                            </Grid>
                            <Grid item xs={4}>
                                <KnowledgeNode title='Program' onStartLearningClick={this.handleStartLearning} />
                            </Grid>
                        </Grid>
                    </div>
                )}

                {this.state.isCourseShowing && (
                    <Course courseTitle={this.state.courseTitle} handleBackClick={this.handleBackClick}/>
                )}

            </div>
        );

    }
}

KnowledgeMap.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KnowledgeMap);