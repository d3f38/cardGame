import { GET_SELECTED_TASK} from '../actions/get_selected_task';

const initionalState = {
    selectedTask: ''
};

export const selectedTask = (state = initionalState, action) => {
    
    switch (action.type) {

    case GET_SELECTED_TASK:
        return action.selectedTask;
    default:
        return state;
    }
};