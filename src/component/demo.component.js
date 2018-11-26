import React,{Component} from 'react';
import {HomeScreen} from './../screen/screenContainer';
import {RouteCreator} from './../routes/routeCreator';

export default class DemoComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'DEMO component'
        }
    }
    clickMe=(evt)=>{
        let r=new RouteCreator();
        r.createRoute(HomeScreen);
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