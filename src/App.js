import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {StackNavigator} from './routes/routeConfig';

import * as Screen from './screen/screenContainer';
import {RouteCreator} from './routes/routeCreator';
import { createStore } from 'redux'
import reducer from './reducer/index'
import { Provider } from 'react-redux'
import {createProvider} from 'react-redux'
import {PRATIBHA_KEY_DEMO_STORE} from './store/key/storeKey'

//const Provider = createProvider(PRATIBHA_KEY_DEMO_STORE)
const store = createStore(reducer)
window.store=store;
console.log(store.getState())


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
      <Provider store={store} storeKey={PRATIBHA_KEY_DEMO_STORE} >
        <div className="App">
          <StackNavigator screen={this.state.screen} >
          </StackNavigator>
        </div>
      </Provider>
    );
  }
}

export default App;
