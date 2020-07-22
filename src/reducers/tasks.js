import * as types from './../constants/ActionTypes'
import randomstring from 'randomstring'

var data = JSON.parse(localStorage.getItem('tasks'))
var initialState =  data ? data :[] ;

var myReducers = (state = initialState, action) =>{
    var id = '';
    var index =-1;
    
    switch(action.type){
        case types.LIST_ALL:
            return state;
        case types.SAVE_TASK:
            var task = {
                id: action.task123.id,
                name: action.task123.name,
                status: (action.task123.status === 'true' || action.task123.status === true) ? true : false
            }
            if(!task.id){
                task.id=randomstring.generate();
                state.push(task)
            }
            else{  
                var meow = 0
                state.forEach((element, index )=> {
                    if(element.id === action.task123.id){
                        meow = index;
                    }})
                    state[meow] = task}
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state];
        case types.UPDATE_STATUS_TASK:
            index = state.findIndex(task => {
                return task.id === action.id
            })
            state[index] = {
                ...state[index],
                status : !state[index].status
            }
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state]
        case types.DELETE_TASK:
            index = state.findIndex(task => {
                return task.id === action.id
            })
            state.splice(index,1)
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state]
        default: return state
    }
}
export default myReducers;