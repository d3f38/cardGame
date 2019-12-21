export const GET_SELECTED_TASK = 'GET_SELECTED_TASK';

export const getSelectedTask = (ticketID = '') => (dispatch) => {

    dispatch({
        type: GET_SELECTED_TASK,
        selectedTask: ticketID
    });

};

