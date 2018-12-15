import React,{Component} from 'react';

import {DemoScreen} from './../screen/screenContainer';
import {RouteCreator} from './../routes/routeCreator';
import {PRATIBHA_KEY_DEMO_STORE} from './../store/key/storeKey'

export default class HomeComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'HOME component'
        }
    }
    clickMe=(evt)=>{
        let r=new RouteCreator();
        r.createRoute(DemoScreen,PRATIBHA_KEY_DEMO_STORE);
    }
    render(){
        return (
            <div>
                <p>hello {this.state.name}</p>
                <p onClick={this.clickMe} >click to navigate</p>
            </div>
        )
    }
}
