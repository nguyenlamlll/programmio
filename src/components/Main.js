import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import KnowledgeMap from './KnowledgeMap/KnowledgeMap';
import PersonalProgress from './PersonalProgress/PersonalProgress';
import FriendBox from './Friend/FriendBox';

class Main extends Component {
    render() {
        return (
            <main>
                <Grid container spacing={16}>
                    <Grid item sm={2} lg={2}>
                    </Grid>
                    <Grid item xs={11} sm={7} lg={7}>
                        <KnowledgeMap />
                    </Grid>

                    <Grid item xs={12} sm={2} lg={2}>
                        <PersonalProgress />

                        <FriendBox />
                    </Grid>
                </Grid>
            </main>
        );
    }
}

export default Main;