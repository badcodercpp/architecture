export class DynamicRouter {
    constructor(componentName){
        this._componentName=componentName;
    }
    loadComponent(){
        return import(`./.././component/${this._componentName}`)
    }
}