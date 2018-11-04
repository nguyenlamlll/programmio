import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

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
                        <Typography variant="h6" id="modal-title">
                            Text in a modal
                </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>

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