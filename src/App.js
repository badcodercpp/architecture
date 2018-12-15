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
import * as StoreKeys from './store/key/storeKey'
import GUID from './util/storeKeyToIdMapper'


window.StoreContainer=[];

for(const a in StoreKeys){
  let g=new GUID();
  let d=g.getGUID();
  window.StoreContainer[a]=d
}

const store = createStore(reducer)
window.store=store;


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
      this.setState({screen:evt.detail.message,store:evt.detail.store},()=>{
        //console.log(this.state)
      })
    });
    const r=new RouteCreator();
    r.createRoute(Screen.HomeScreen,window.StoreContainer[PRATIBHA_KEY_DEMO_STORE]);
    this.setState({
      _g_store_key:window.StoreContainer[PRATIBHA_KEY_DEMO_STORE]
    })
  }
  componentDidMount(){

  }
  componentWillUnmount(){
    window.removeEventListener(this._remove_route)
  }
  render() {
    return (
      <Provider store={store} storeKey={this.state._g_store_key} >
        <div className="App">
          <StackNavigator screen={this.state.screen} store_key={this.state._g_store_key} >
          </StackNavigator>
        </div>
      </Provider>
    );
  }
}

export default App;
