import { GET_ACTIVE_FILTERS } from '../actions/get_active_filters';
const initionalState = {
    status: {
        value: ''
    },
    type: {
        value: ''
    },
    floor: {
        value: 2
    },
    employee: {
        value: ''
    },
    bcs: {
        value: 1
    }, 
    columns: true
};

export const activeFilters = (state = initionalState, action) => {
    switch (action.type) {
    case GET_ACTIVE_FILTERS:
        return {...state, ...action.payload};
    default:
        return state;
    }
};