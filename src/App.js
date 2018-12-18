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

import FixedHeader from './component/fixed/header/header.js'


window.StoreContainer=[];

for(const a in StoreKeys){
  let g=new GUID();
  let d=g.getGUID();
  window.StoreContainer[a]=d
}

const store = createStore(reducer)
window.store=store;

window.addEventListener("load", function(event) {
  let loc=window.location.href.split('/')
  console.log(loc[loc.length-1])
  console.log(Screen.HomeScreen);
  if (loc[loc.length-2]==="component") {
    let comp=loc[loc.length-1];
    console.log(comp)
    //let screen=
    let navScreen;
    for(const s in Screen){
      //console.log(Screen[s])
      //console.log(s)
      if (Screen[s].name==comp) {
        navScreen=Screen[s];
        
        break;
      } else {
        navScreen=Screen.HomeScreen
      }
    }
    const r=new RouteCreator();
    console.log(navScreen)
    r.createRoute(navScreen,window.StoreContainer[PRATIBHA_KEY_DEMO_STORE]);
  } else {
    throw new Error("Invalid Component name or destination")
  }
});

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

    let loc=window.location.href.split('/')
    //console.log(loc[loc.length-1])
    //console.log(Screen.HomeScreen);
    if (loc[loc.length-2]==="component") {
      let undef=loc[loc.length-1]
      console.log(undef !== undefined)
      console.log(undef)
      let navScreen;
      for(const s in Screen){
        //console.log(Screen[s])
        //console.log(s)
        if (Screen[s].name==undef) {
          navScreen=Screen[s];
          
          break;
        } else {
          navScreen=Screen.LoadingScreen
        }
      }

      const r=new RouteCreator();
      r.createRoute(navScreen,window.StoreContainer[PRATIBHA_KEY_DEMO_STORE]);

    }else{
      throw new Error("Unvalid component route")
    }


    
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
          <FixedHeader />
          <StackNavigator screen={this.state.screen} store_key={this.state._g_store_key} >
          </StackNavigator>
        </div>
      </Provider>
    );
  }
}

export default App;
