const Post = require('../models/Post');

module.exports = {
  async store(req, res) {
    const post = await Post.findById(req.params.id);

    post.set({ upvotes: post.upvotes + 1 });

    await post.save();

    req.io.emit('upvote', post);

    return res.json(post);
  }
};
