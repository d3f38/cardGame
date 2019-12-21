import { GET_AMOUNT_CARDS } from '../actions/get_amount_cards';
const initionalState = '';

export const amountCards = (state = initionalState, action) => {
    switch (action.type) {
    case GET_AMOUNT_CARDS:
        return action.amountCards;
    default:
        return state;
    }
};