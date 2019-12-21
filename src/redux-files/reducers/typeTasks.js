import { GET_ALL_TYPE_TASKS_SUCCES, GET_ALL_TYPE_TASKS_ERROR } from '../actions/get_all_type_tasks';
const initionalState = [
    {
        value: '',
        content: ''
    }];

export const typeTasks = (state = initionalState, action) => {
    switch (action.type) {
    case GET_ALL_TYPE_TASKS_SUCCES:
        return action.payload.types;
    case GET_ALL_TYPE_TASKS_ERROR:
        return action.err;
    default:
        return state;
    }
};