import * as types from '../constants/ActionTypes'

var initialState =  {
    by: '',
    value: 1
}

var myReducers = (state = initialState, action) =>{
    switch(action.type){
        case types.SORT:
            return {
                by : action.sort.by,
                value : action.sort.value
            }
        default:
            return state
    }
}
export default myReducers;