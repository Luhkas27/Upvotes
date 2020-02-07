import React, { Component } from 'react';
import socket from 'socket.io-client';

import api from '../../server';

import Post from '../../components/post';

import { Wrapper, Form, Describle, Title, List } from './styles';

class Posts extends Component {
  state = {
    posts: [],
    newPost: ''
  };

  async componentDidMount() {
    this.subscribeToEvents();
    const response = await api.get('posts');

    this.setState({ posts: response.data });
  }

  subscribeToEvents = () => {
    const io = socket('http://localhost:5000');

    io.on('post', data => {
      this.setState({ posts: [data, ...this.state.posts] });
    });

    io.on('upvote', data => {
      this.setState({ posts: this.state.posts.map(post => (post._id === data._id ? data : post)) });
    });
  };

  handleNewPost = async e => {
    if (e.keyCode !== 13) return;

    const content = this.state.newPost;
    const author = localStorage.getItem('@Upvote:username');

    await api.post('posts', { author, content });

    this.setState({ newPost: '' });
  };

  handleInput = e => {
    this.setState({ newPost: e.target.value });
  };

  render() {
    const { newPost, posts } = this.state;
    return (
      <Wrapper>
        <Form>
          <Describle
            value={newPost}
            onChange={this.handleInput}
            onKeyDown={this.handleNewPost}
            placeholder="O que está rolando?"
          />
        </Form>
        <Title>Posts :</Title>
        <List>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </List>
      </Wrapper>
    );
  }
}

export default Posts;
