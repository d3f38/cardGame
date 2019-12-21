import { GET_INITIAL_MAP } from '../actions/get_initial_map';

const initionalState = {
    
};

export const initMap = (state = initionalState, action) => {
    
    switch (action.type) {

    case GET_INITIAL_MAP:
        return action.map;
    default:
        return state;
    }
};