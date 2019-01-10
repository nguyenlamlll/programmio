import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import Divider from '@material-ui/core/Divider';

import colors from './../../colors';

import Draggable from 'react-draggable';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        //width: `817px`
    };
}

const styles = theme => ({
    button: {
        //margin: theme.spacing.unit,
        //position: 'absolute',
    },
    circleBase: {
        borderRadius: '50%',
        width: '90px',
        height: '90px',
        background: '#8DD9AD',
        // border: '3px solid red'
    },
    learnedNode: {
        background: '#38E849'
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
    modalButtons: {
        paddingTop: '15px'
    },
    modalBody : {
        paddingTop: '15px'
    },
    avatar: {
        width: 100,
        height: 100
    },
    button: {
        backgroundColor: colors.complimentLight,
        borderRadius: '0',
    }
});

class KnowledgeNode extends React.Component {
    state = {
        isLearned: false,
        open: false,
        defaultX: this.props.defaultX,
        defaultY: this.props.defaultY
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleStartLearningModalClick = () => {
        this.props.onStartLearningClick(this.props.title);
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Draggable>
                    <Button className={`
                        ${classes.button}
                        ${classes.circleBase}
                        ${this.state.isLearned ? classes.learnedNode : ''}
                        `}
                        onClick={this.handleOpen}
                    >
                        <p>{this.props.title}</p>
                    </Button>
                </Draggable>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                    //style={{alignItems:'center',justifyContent:'center'}}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Grid container spacing={8} justify='center' alignItems='flex-start'>
                            <Grid item xs={3} lg={3}>
                                <Avatar className={classes.avatar}>
                                    <FolderIcon />
                                </Avatar>
                            </Grid>
                            <Grid item xs={8} lg={8}>
                                <Typography variant="h5" id="modal-title">
                                    {this.props.title}
                                </Typography>
                                <Divider/>
                            </Grid>
                        </Grid>

                        <Typography variant="body2" id="simple-modal-description" className={classes.modalBody}>
                            Begin with this and that, you will learn the amazing things of all greatness in this universe. However, things will get out of our hands quickly. Simple static arrays won’t do us enough good. Imagine we have a town of 20.000 hectares and we are the heads of the town. At day 01, there are probably 10 houses only. We may decide an array of 10. But eventually, more and more people will come to our lovely house. Add more array? Seems good but now we have to manage all of those arrays. Can we merge them into a container somehow?
                        </Typography>

                        <Grid container spacing={16} className={classes.modalButtons}>
                            <Grid item xs={6}>
                                <Button variant="contained" color="primary" fullWidth
                                    onClick={this.handleStartLearningModalClick}
                                    className={classes.button}>
                                    Start Learning
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="contained" color="primary" fullWidth
                                    className={classes.button}>
                                    Test out
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Modal>
            </div>

        );
    }
}

KnowledgeNode.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(KnowledgeNode);