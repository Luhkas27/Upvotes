import React, { Component } from 'react';
import moment from 'moment';

import api from '../../server';

import { Container, Author, Content, Button, Icon, Upvotes, ContainerAuthor } from './styles';

class Post extends Component {
  handleLike = async e => {
    const { _id } = this.props.post;

    await api.post(`upvotes/${_id}`);
  };

  render() {
    const { post } = this.props;
    return (
      <Container>
        <ContainerAuthor>
          <Author>{post.author}</Author>
          {moment(post.createdAt).format('DD/MM/YYYY')}
        </ContainerAuthor>
        <Content>{post.content}</Content>
        <Button onClick={this.handleLike}>
          <Icon />
          <Upvotes>{post.upvotes}</Upvotes>
        </Button>
      </Container>
    );
  }
}

export default Post;
