export const GET_AMOUNT_CARDS = 'GET_AMOUNT_CARDS';

export const getAmountCards = (amount = 10) => (dispatch) => {
    

    dispatch({
        type: GET_AMOUNT_CARDS,
        amountCards: amount
    });
    
};

