import { TOGGLE_TRACKER } from '../actions/toggle_tracker';
const initionalState = {
    show: false,
    href: ''
};

export const tracker = (state = initionalState, action) => {
    switch (action.type) {
    case TOGGLE_TRACKER:
        return {
            ...state, 
            show: !state.show,
            href: action.payload || state.href,
        };
    default:
        return state;
    }
};