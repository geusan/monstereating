import {
    POST_CREATE,
    POST_CREATE_SUCCESS,
    POST_CREATE_FAILURE,
    POST_READ,
    POST_READ_SUCCESS,
    POST_READ_FAILURE,
    POST_UPDATE,
    POST_UPDATE_SUCCESS,
    POST_UPDATE_FAILURE,
    POST_DELETE,
    POST_DELETE_SUCCESS,
    POST_DELETE_FAILURE
} from './ActionTypes';
import axios from 'axios';


// post create
export function postCreateRequest(title, content){
    return (dispatch) => {
        dispatch(postCreate());
        
        return axios.post('/api/post/create', {title, content})
        .then((res) => {
            dispatch(postCreateSuccess());
        }).catch((err) => {
            dispatch(postCreateFailure(err.response.data.code));
        });
    };
}

export function postCreate() {
    return {
        type: POST_CREATE
    };
}

export function postCreateSuccess(){
    return {
        type: POST_CREATE_SUCCESS
    };
}

export function postCreateFailure(){
    return {
        type: POST_CREATE_FAILURE
    };
}


// post read
export function postReadRequest(){
    return (dispatch) => {
        dispatch(postRead());
        
        return axios.get('/api/post/all')
        .then((res) => {
            dispatch(postReadSuccess());
        }).catch((err) => {
            dispatch(postReadFailure(err.response.data.code));
        });
    };
}

export function postRead() {
    return {
        type: POST_READ
    };
}

export function postReadSuccess(){
    return {
        type: POST_READ_SUCCESS
    };
}

export function postReadFailure(){
    return {
        type: POST_READ_FAILURE
    };
}



// post update
export function postUpdateRequest(id, title, content){
    return (dispatch) => {
        dispatch(postUpdate());
        
        return axios.post('/api/post/update', {id, title, content})
        .then((res) => {
            dispatch(postUpdateSuccess());
        }).catch((err) => {
            dispatch(postUpdateFailure(err.response.data.code));
        });
    };
}

export function postUpdate() {
    return {
        type: POST_UPDATE
    };
}

export function postUpdateSuccess(){
    return {
        type: POST_UPDATE_SUCCESS
    };
}

export function postUpdateFailure(){
    return {
        type: POST_UPDATE_FAILURE
    };
}



// post delete
export function postDeleteRequest(id){
    return (dispatch) => {
        dispatch(postDelete());
        
        return axios.post('/api/post/delete', {id})
        .then((res) => {
            dispatch(postDeleteSuccess());
        }).catch((err) => {
            dispatch(postDeleteFailure(err.response.data.code));
        });
    };
}

export function postDelete() {
    return {
        type: POST_DELETE
    };
}

export function postDeleteSuccess(){
    return {
        type: POST_DELETE_SUCCESS
    };
}

export function postDeleteFailure(){
    return {
        type: POST_DELETE_FAILURE
    };
}

