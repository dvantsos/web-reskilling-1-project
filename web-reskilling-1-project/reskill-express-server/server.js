const express = require('express');
const cors = require('cors');
const timeout = require('connect-timeout');
const axios = require('axios');

const port = 3000;

const server = express();
server.use(cors());
server.use(timeout('5s'));

server.use((err, req, res, next) => {
    console.error("Error in request:", err.stack);
    res.status(500).json({
        message: 'Internal Server Error',
        error: err.message,
    });
});

process.on('uncaughtException', (err) => {
    console.error('There was an uncaught error: ', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at: ', promise, 'reason: ', reason);
});

server.get('/posts', async (req, res) => {
    try {
        const [postsResponse, photosResponse] = await Promise.all([
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/photos')
        ]);

        const posts = postsResponse.data.slice(0,11);
        const photos = photosResponse.data;
        
        const combinedPostList = posts.map(post => {
            const postPhotos = photos.filter(photo => photo.albumId === post.id);

            return {
                id: post.id,
                userId: post.userId,
                title: post.title,
                body: post.body,
                photoTitle_1: postPhotos[0].title,
                photo_1: postPhotos[0].url,
                thumbnail_1: postPhotos[0].thumbnailUrl,
                photoTitle_2: postPhotos[1].title,
                photo_2: postPhotos[1].url,
                thumbnail_2: postPhotos[1].thumbnailUrl,
            }
        })

        res.json(combinedPostList);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching data for post with id ' + postId);
    }
});

server.get('/post/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const [postResponse, photosResponse] = await Promise.all([
            axios.get('https://jsonplaceholder.typicode.com/posts/' + postId),
            axios.get('https://jsonplaceholder.typicode.com/photos?albumId=' + postId)
        ]);

        res.json(
            {
                id: postId,
                userId: postResponse.data.userId,
                title: postResponse.data.title,
                body: postResponse.data.body,
                photoTitle: photosResponse.data[0].title,
                photo: photosResponse.data[0].url,
                thumbnail: photosResponse.data[0].thumbnailUrl,
            }
        );

    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching data for post with id ' + postId);
    }
});


server.get('/', (req, res) => {

});

server.listen(port, err => {
    if (err) {
        throw err;
    }
    console.log(`Server is ready on http://localhost:${port}`);
});