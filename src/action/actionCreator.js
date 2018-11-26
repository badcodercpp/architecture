import {DEMO_ACTION} from './actionTypes';
export const DEMO_ACTION_CREATOR=(payload)=>{
    return {
        type:DEMO_ACTION,
        payload
    }
}