import { GET_ALL_STATUS_TASKS_SUCCES, GET_ALL_STATUS_TASKS_ERROR } from '../actions/get_all_status_tasks';
const initionalState = [
    {
        value: '',
        content: ''
    }];

export const statusTasks = (state = initionalState, action) => {
    switch (action.type) {
    case GET_ALL_STATUS_TASKS_SUCCES:
        return action.payload.statuses;
    case GET_ALL_STATUS_TASKS_ERROR:
        return action.err;
    default:
        return state;
    }
};