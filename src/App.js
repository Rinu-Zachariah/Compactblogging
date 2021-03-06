import React, { Component } from 'react';
import './App.css';
import { Row, Col, Spin, } from 'antd';
import NavigationMenu from './components/NavigationMenu/NavigationMenu.js';
import UnauthorizedAccess from './components/UnauthorizedAccess/UnauthorizedAccess.js';
import Login from './components/Login/Login.js';

class App extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	loading: false,
			authorizedAccess: true
    };
	}

  render() {
  	let state = this.state;
    return (
      <div className="App">
      	{!state.loading ? 
      		<span>
		      	{state.authorizedAccess ?
		        	<Login />
		        	:
		        	<UnauthorizedAccess />
		      	}
	      	</span>
	      	: 
	      	<Row className="loader-row">
	      		<Col>
	      			<Spin size="large" tip="Loading..." />
      			</Col>
  				</Row>
      	}
      </div>
    );
  }
}

export default App;
