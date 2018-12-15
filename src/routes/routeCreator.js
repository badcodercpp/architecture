//import {HomeScreen} from './../screen/screenContainer'
export class RouteCreator {
    createRoute=(screen,store)=>{
        let event = new CustomEvent(
            "newRoute", 
            {
                detail: {
                    message: screen,
                    store:store,
                    time: new Date(),
                },
                bubbles: true,
                cancelable: true
            }
        );
        window.dispatchEvent(event);
    }
}