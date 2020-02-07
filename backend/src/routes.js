const express = require('express');

const routes = express.Router();

const PostController = require('./controllers/PostController');
const UpVoteController = require('./controllers/UpVoteController');

routes.get('/posts', PostController.index);
routes.post('/posts', PostController.store);
routes.delete('/posts/:id', PostController.delete);

routes.post('/upvotes/:id', UpVoteController.store);

module.exports = routes;
