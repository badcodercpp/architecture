import React,{Component} from 'react';
import {BrowserManager} from './routeUrlChanger';
import {DynamicRouter} from './dynamicRouter';

import {LoadingModule} from './../Loader/moduleLoader'

//import {PRATIBHA_KEY_DEMO_STORE} from './../store/key/storeKey'


export class StackNavigator extends Component {
    constructor(props){
        super(props);
        this.state={
            ...this.props,
            _route_module:LoadingModule
        }
    }
    mapStoreToUrl=(store,suffix)=>{
        //`/store/${store}/${suffix}`
        return `/${suffix}`
    }
    componentWillReceiveProps(nextProps){
        this.setState({...nextProps},()=>{
            console.log(this.state.screen.componentDest)
            const d=new DynamicRouter(this.state.screen.componentDest);
            d.loadComponent().then(cmp=>{
                this.setState({_route_module:cmp.default})
            })
            let b=new BrowserManager(window);
            let m=this.mapStoreToUrl(this.state.store_key,`component/${this.state.screen.name}`)
            //b.updateRoute({},this.state.name,`/${this.state.screen.name}`)
            b.updateRoute({},this.state.name,m)
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
        let m=this.mapStoreToUrl(this.state.store_key,`component/${this.state.screen.name}`)
        //b.updateRoute({},this.state.name,`/${this.state.screen.name}`)
        b.updateRoute({},this.state.name,m)
    }
    render(){
        return (
            <this.state._route_module />
        )
    }
}


