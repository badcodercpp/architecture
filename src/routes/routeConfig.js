import React,{Component} from 'react';
import {BrowserManager} from './routeUrlChanger';
import {DynamicRouter} from './dynamicRouter';

import {LoadingModule} from './../Loader/moduleLoader'


export class StackNavigator extends Component {
    constructor(props){
        super(props);
        this.state={
            ...this.props,
            _route_module:LoadingModule
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({...nextProps},()=>{
            const d=new DynamicRouter(this.state.screen.componentDest);
            d.loadComponent().then(cmp=>{
                this.setState({_route_module:cmp.default})
            })
            let b=new BrowserManager(window);
            b.updateRoute({},this.state.name,`/${this.state.screen.name}`)
        })
    }
    componentWillMount(){
        const d=new DynamicRouter(this.state.screen.componentDest);
        d.loadComponent().then(cmp=>{
            this.setState({_route_module:cmp.default})
        })
    }
    componentDidMount(){
        let b=new BrowserManager(window);
        b.updateRoute({},this.state.name,`/${this.state.screen.name}`)
    }
    render(){
        return (
            <this.state._route_module />
        )
    }
}


