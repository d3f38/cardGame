import { GET_ALL_PRIORITY_TASKS_SUCCES, GET_ALL_PRIORITY_TASKS_ERROR } from '../actions/get_all_priority_tasks';
const initionalState = [
    {
        value: '',
        content: ''
    }];

export const priorityTasks = (state = initionalState, action) => {
    switch (action.type) {
    case GET_ALL_PRIORITY_TASKS_SUCCES:
        return action.payload.priorities;
    case GET_ALL_PRIORITY_TASKS_ERROR:
        return action.err;
    default:
        return state;
    }
};