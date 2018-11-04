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

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
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
    }
});

class KnowledgeNode extends React.Component {
    state = {
        isLearned: false,
        open: false
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
                <Button className={`
                    ${classes.button}
                    ${classes.circleBase}
                    ${this.state.isLearned ? classes.learnedNode : ''}
                    `}
                    onClick={this.handleOpen}
                >
                    <p>{this.props.title}</p>
                </Button>

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Grid container spacing={16}>
                            <Grid item xs={3}>
                                <Avatar className={classes.avatar}>
                                    <FolderIcon />
                                </Avatar>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant="h5" id="modal-title">
                                    {this.props.title}
                                </Typography>
                                <Divider/>
                            </Grid>
                        </Grid>

                        <Typography variant="subtitle1" id="simple-modal-description" className={classes.modalBody}>
                            Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus.
                        </Typography>
                        <Grid container spacing={16} className={classes.modalButtons}>
                            <Grid item xs={6}>
                                <Button variant="contained" color="primary" fullWidth
                                    onClick={this.handleStartLearningModalClick}>
                                    Start Learning
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="contained" color="primary" fullWidth>
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