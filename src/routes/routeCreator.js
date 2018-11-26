//import {HomeScreen} from './../screen/screenContainer'
export class RouteCreator {
    createRoute=(screen)=>{
        let event = new CustomEvent(
            "newRoute", 
            {
                detail: {
                    message: screen,
                    time: new Date(),
                },
                bubbles: true,
                cancelable: true
            }
        );
        window.dispatchEvent(event);
    }
}