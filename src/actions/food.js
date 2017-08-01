import {
    FOOD_NEW,
    FOOD_NEW_SUCCESS,
    FOOD_NEW_FAILURE,
    FOOD_READ,
    FOOD_READ_SUCCESS,
    FOOD_READ_FAILURE
} from './ActionTypes';
import axios from 'axios';

// 음식 만들기
export function foodNewRequest(name, ingredient){
    return (dispatch) => {
        dispatch(foodNew());
        
        let url = "/api/food/newFood";
        console.log("foodNewRequest : " + url + "//" + name + "//" + ingredient);
        
        return axios.post(url, {name, ingredient})
        .then((res) => {
            dispatch(foodNewSuccess(res.data));
            console.log("foodNewResponse" + res);
        }).catch((err) => {
            dispatch(foodNewFailure(err));
        });
    };
}

export function foodNew() {
    return {
        type: FOOD_NEW
    };
}

export function foodNewSuccess(data){
    return {
        type: FOOD_NEW_SUCCESS,
        data
    };
}

export function foodNewFailure(err){
    return {
        type: FOOD_NEW_FAILURE,
        err: err
    };
}


//음식 읽어오기
export function foodReadRequest(){
    return (dispatch) => {
        dispatch(foodRead());
        
        let url = "/api/food/allFood";
        console.log("foodReadRequest : " + url);
        
        return axios.get(url)
        .then((res) => {
            dispatch(foodReadSuccess(res.data));
            console.log("foodReadResponse" + res);
        }).catch((err) => {
            dispatch(foodReadFailure(err));
            console.log(err);
        });
    };
}

export function foodRead() {
    return {
        type: FOOD_READ
    };
}

export function foodReadSuccess(data){
    return {
        type: FOOD_READ_SUCCESS,
        data
    };
}

export function foodReadFailure(err){
    return {
        type: FOOD_READ_FAILURE,
        err: err
    };
}