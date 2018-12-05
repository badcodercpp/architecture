import { DEMO_ACTION, HOME_ACTION} from './actionTypes';
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