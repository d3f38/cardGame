import { GET_SELECTED_DECK } from '../actions/get_selected_deck';
const initionalState = '';

export const selectedDeck = (state = initionalState, action) => {
    switch (action.type) {
    case GET_SELECTED_DECK:
        return action.selectedDeck;
    default:
        return state;
    }
};