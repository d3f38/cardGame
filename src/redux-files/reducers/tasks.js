import { GET_ALL_TASKS_SUCCES, GET_ALL_TASKS_ERROR } from '../actions/get_all_tasks';
const initionalState = [];

export const tasks = (state = initionalState, action) => {
    switch (action.type) {
    case GET_ALL_TASKS_SUCCES:
        return action.payload.tasks;
    case GET_ALL_TASKS_ERROR:
        return action.err;
    default:
        return state;
    }
};