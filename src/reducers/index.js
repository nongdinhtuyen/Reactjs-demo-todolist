import {combineReducers} from 'redux';
import tasks1 from './tasks'
import isDisplayForm from './isDisplayForm'
import itemEditing from './itemEditing'
import table from './table';
import search from './search';
import sort from './sort'


const myReducer = combineReducers({
    tasks1,
    isDisplayForm,
    itemEditing,
    table,
    search,
    sort
});

export default myReducer   
