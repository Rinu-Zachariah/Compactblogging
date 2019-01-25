import React, { Component } from 'react';
import { Row, Col, Tabs  } from 'antd';
import './MainPage.css';
import Post from '../Post/Post';

const TabPane = Tabs.TabPane;

class MainPage extends Component {
  
  state = {
    loading: false
  };

  render() {
    
    return (
      <div>
        <Post />
      </div>
    );
  }
}

export default MainPage;