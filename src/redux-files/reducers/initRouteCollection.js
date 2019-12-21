import { GET_INITIAL_ROUTE_COLLECTION } from '../actions/get_initial_route_collection';

const initionalState = {
    
};

export const initRouteCollection = (state = initionalState, action) => {
    
    switch (action.type) {

    case GET_INITIAL_ROUTE_COLLECTION:
        return action.routeCollection;
    default:
        return state;
    }
};