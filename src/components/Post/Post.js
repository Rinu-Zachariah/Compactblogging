import React, {Component} from 'react';
import {Input, Button, Card, Row, Col, message } from 'antd';
import axios from 'axios';

class Post extends Component {
  state = {
    posts: [],
    comments: [],
    loading:true
  };

  componentDidMount() {
    let state = this.state;
    axios.all([
      axios.get('https://jsonplaceholder.typicode.com/post'),
      axios.get('https://jsonplaceholder.typicode.com/comments')
    ]).then(response => {
      state.post = response[0].data;
      state.comments = response[1].data;
      state.loading = false;
      this.setState(state);
    })
    .catch(error => {
      message.error('Something went wrong, please refresh and try again');
    })
  }

  render() {
    let state = this.state;
    return (
      <div>
        {this.state.posts.map(post =>(
          <div>
            <li
              key={post.id}
              className="collection-item left-align red lighten-3"
            >
              <h5>User ID: {post.id}</h5>
              <p>Post: {post.body}</p>
            </li>
            <div>
              {
                this.state.comments.map(comment => (
                  <div
                    key={comment.id}
                    className="collection-item left-align purple lighten-2"
                  >
                    <p>Post: {comment.body}</p>
                  </div>
                ))
              }
            </div>
          </div>
        ))}
      </div>
    )
  }
}



export default Post;