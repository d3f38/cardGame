import { GET_ROUTES_SUCCES, GET_ROUTES_ERROR } from '../actions/get_routes';
const initionalState = [];

export const routes = (state = initionalState, action) => {
    switch (action.type) {
    case GET_ROUTES_SUCCES:
        return action.payload.routes;
    case GET_ROUTES_ERROR:
        return action.err;
    default:
        return state;
    }
};