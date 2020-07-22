import {combineReducers} from 'redux';
import tasks1 from './tasks'
import isDisplayForm from './isDisplayForm'
import itemEditing from './itemEditing'

const myReducer = combineReducers({
    tasks1,
    isDisplayForm,
    itemEditing
});

export default myReducer   
