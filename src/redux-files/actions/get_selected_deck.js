export const GET_SELECTED_DECK = 'GET_SELECTED_DECK';

export const getSelectedDeck = (deck = 'deck-one') => (dispatch) => {
    

    dispatch({
        type: GET_SELECTED_DECK,
        selectedDeck: deck
    });
    
};

