import * as types from '../constants/ActionTypes'

var initialState =  ''

var myReducers = (state = initialState, action) =>{
    switch(action.type){
        case types.SEARCH:
            console.log(action)
            return action.keyword
        default:
            return state
    }
}
export default myReducers;