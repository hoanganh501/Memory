import React, {useEffect} from "react";
import Container from '@mui/material/Container'
import { AppBar, Typography, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import {getPosts} from './actions/posts'
import memories from './images/memories.png';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import styles from './styles.js'; // Import styled-component đã chuyển đổi

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])
    return (
        <Container maxidth="lg">
            <AppBar className={styles.appBar} position="static" color="inherit">
                <Typography className={styles.heading} variant="h2" >Memories</Typography>
                <img className={styles.image} src={memories} alt="Memories"height="60" width="60" />
            </AppBar>
             
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3} >
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>

                    </Grid>
                </Container>
            </Grow>
          </Container>   
    );
}

export default App;