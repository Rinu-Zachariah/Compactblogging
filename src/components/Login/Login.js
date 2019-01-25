import React, {Component} from 'react';
import {Input, Button, Card, Row, Col } from 'antd';
import axios from 'axios';
import './login.css';
import NavigationMenu from '../NavigationMenu/NavigationMenu.js';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      dataValues:'',
      navShow: false,
      personLoggedIn:''
    };
  }
  componentDidMount(){
    axios({ 
      url: 'http://jsonplaceholder.typicode.com/users',
      method: 'GET'
    }).
    then(response => {
      this.setState({ dataValues: response.data})
    });
  }
  handleChange = event => {
    this.setState({ name : event.target.value });
  }
  routeTo = () => {
    this.setState({navShow: true})
  }
  validateForm() {
    let state = this.state;
    var dataValues = state.dataValues;
    var bool = false
    if(dataValues && state.name){
      dataValues.forEach(function(obj){
        if(state.name.toLowerCase() === obj.name.toLowerCase()){
          bool = true;
          state.personLoggedIn= obj;
        }
      });
    }
    return bool;
  }

  render() {
    let state = this.state;
    return ( 
      <div>
        {state.navShow === false && <Row>
          <Col className="column-element-padding" xs={{span: 8, offset: 8}} sm={{span: 8, offset: 8}} md={{span: 8, offset: 8}}>
            <Card> 
              <div className="setMargin">
                <Input onChange={this.handleChange}/>
              </div>
              <div>
                <Button disabled={!this.validateForm()} type="submit" onClick={() => this.routeTo()}> LOGIN </Button>
              </div>
            </Card>
          </Col>
        </Row>}
        {state.navShow && <NavigationMenu userDetails={this.state.personLoggedIn} children={this.props.children}/>}
      </div>
    );
  }
}
