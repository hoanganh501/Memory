import React from "react";
import Post from './Post/Post';
import styled from './styles.js';

// import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

const Posts = () => {
    const posts = useSelector((state) =>state.posts);
    const classes = styled();

    console.log(posts);


    return (
        <>
            <h1 className={classes.something}>Posts</h1>
            <Post />
        </>
    );
}

export default Posts;



