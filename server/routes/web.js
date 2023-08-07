import postsRouter from './posts.js';

function route(app) {

    app.use('/posts', postsRouter);

};
export default route;
