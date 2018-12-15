import { DEMO_ACTION, HOME_ACTION} from './actionTypes';
import {TOGGLE_NAME} from './actionTypes';
export const DEMO_ACTION_CREATOR=(payload)=>{
    return {
        type:DEMO_ACTION,
        payload
    }
}

//HOME_ACTION_CREATOR

export const HOME_ACTION_CREATOR=(payload)=>{
    return {
        type:HOME_ACTION,
        payload
    }
}

export const TOGGLE_NAME_METHOD=(name)=>{
    return {
        type:TOGGLE_NAME,
        name:name
    }
}