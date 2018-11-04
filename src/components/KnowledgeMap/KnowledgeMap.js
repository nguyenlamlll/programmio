import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import KnowledgeNode from './KnowledgeNode';

import './KnowledgeMap.css';

const styles = theme => ({
    root: {
      flexGrow: 1,
      display: 'inline-block',
      position: 'fixed',
      top: '0',
      bottom: '0',
      right: '0',
      left: '0',
      margin: 'auto',
      width: '30em',
      height: '3em'
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });
  

class KnowledgeMap extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}> 
                <div className={``}>
                    <Grid container spacing={24}>
                        <Grid item xs={6}>
                            <KnowledgeNode title='Basic'/>
                        </Grid>
                        <Grid item xs={6}>
                            <KnowledgeNode title='Algorithm'/>
                        </Grid>
                        <Grid item xs={6}>
                            <KnowledgeNode title='Structures'/>  
                        </Grid>
                        <Grid item xs={6}>
                            <KnowledgeNode title='Logic'/>
                        </Grid>
                        
                    </Grid>
                    
                </div>
            </div>
        );
    }
}

KnowledgeMap.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(KnowledgeMap);