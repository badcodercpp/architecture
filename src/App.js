import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {StackNavigator} from './routes/routeConfig';

import * as Screen from './screen/screenContainer';
import {RouteCreator} from './routes/routeCreator';


class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      name:"APP",
      screen:{}
    }
  }
  componentWillMount(){
    this._remove_route=window.addEventListener("newRoute", (evt)=>{
      this.setState({screen:evt.detail.message},()=>{
        //console.log(this.state)
      })
    });
    const r=new RouteCreator();
    r.createRoute(Screen.HomeScreen);
  }
  componentDidMount(){

  }
  componentWillUnmount(){
    window.removeEventListener(this._remove_route)
  }
  render() {
    return (
      <div className="App">
        <StackNavigator screen={this.state.screen} >
        </StackNavigator>
      </div>
    );
  }
}

export default App;
