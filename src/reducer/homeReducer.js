
export const homeReducer = (state = [], action)=>{
    switch (action.type) {
        case 'HOME_ACTION':
          return [
            ...state,
            {
              id: action.id,
              text: action.text
            }
          ]
        default:
          return state
    }
}