import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';

const styles = theme => ({
    root: {
        flexGrow: 1,
        background: 'rgba(255, 255, 255, 1)',
        marginTop: '16px'
    },
    header: {
        textAlign: 'left',
        paddingLeft: '20px'
    }

});

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};


class FriendBox extends React.Component {
    state = {
        value: 0
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;
        return (
            <div className={classes.root}>
                <Grid container justify='center' alignItems='center'>
                    <Grid item xs={12}>
                        <h3 className={classes.header}>
                            Your Friends
                        </h3>
                    </Grid>

                    <Grid item xs={12}>
                        <AppBar position="static" color="default">
                            <Tabs
                                value={this.state.value}
                                onChange={this.handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                            >
                                <Tab label="This week" style={{width: 80, minWidth: 80}}/>
                                <Tab label="This month" style={{width: 80, minWidth: 80}}/>
                                <Tab label="All time" style={{width: 80, minWidth: 80}}/>
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={this.state.value}
                            onChangeIndex={this.handleChangeIndex}
                        >
                            <TabContainer dir={theme.direction}>Item One</TabContainer>
                            <TabContainer dir={theme.direction}>Item Two</TabContainer>
                            <TabContainer dir={theme.direction}>Item Three</TabContainer>
                        </SwipeableViews>
                    </Grid>
                </Grid>
            </div>
        );

    }
}

FriendBox.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FriendBox);