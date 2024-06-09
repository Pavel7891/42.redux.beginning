//import {combineReducers, legacy_createStore as createStore} from "redux"
import {configureStore} from '@reduxjs/toolkit';


import dialoguesReducer from './dialogues-reducer';
import profileReducer from  './profile-reducer';
import sidebarReducer from "./sidebar-reducer";

let store = configureStore({
    reducer:
    {profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    sidebarPage: sidebarReducer}
});


export default store;

/* reducers -- группа, объединяющая наши функции
редюсоры и объекты, с которыми эти функции работают.
*/
 
/* Важное примечание: функции 
dispatch,  subscribe, getState 
уже по дефолту находятся в редаксе,
и поэтому их не надо отдельно
импортировать и прописывать.
*/