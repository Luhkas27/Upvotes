const Post = require('../models/Post');

module.exports = {
  async index(req, res) {
    const posts = await Post.find({}).sort('-createdAt');

    return res.json(posts);
  },

  async store(req, res) {
    const post = await Post.create(req.body);

    req.io.emit('post', post);

    return res.json(post);
  },

  async delete(req, res) {
    const post = await Post.findByIdAndRemove(req.params.id);

    req.io.emit('post', post);

    return res.json();
  }
};
