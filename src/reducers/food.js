import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    post:{
        status: 'INIT',
        error: -1,
        success: false
    },
    list:{
        status: 'INIT',
        error: -1,
        data: []
    }
}

export default function food(state, action) {
    if(typeof state === "undefined") {
        state = initialState;
    }
    
    
    switch(action.type){
        case types.FOOD_NEW:
            return update(state, {
                post: {
                    status: { $set: 'WAITING' },
                    error: { $set: -1 }
                }
            });
        case types.FOOD_NEW_SUCCESS:
            return update(state, {
                post: {
                    status: { $set: 'SUCCESS' },
                    data: { $set: action.data }
                }
            });
        case types.FOOD_NEW_FAILURE:
            return update(state,{
                post: {
                    status: { $set: 'FAILURE' },
                    error: { $set: action.error }
                }
            });
            
        case types.FOOD_READ:
            return update(state, {
                list: {
                    status: { $set: 'WAITING' },
                    error: { $set: -1 }
                }
            });
        case types.FOOD_READ_SUCCESS:
            return update(state, {
                list: {
                    status: { $set: 'SUCCESS' },
                    data: { $set: action.data }
                }
            });
        case types.FOOD_READ_FAILURE:
            return update(state,{
                list: {
                    status: { $set: 'FAILURE' },
                    error: { $set: action.error }
                }
            });
            
        default:
            return state;
    }
}