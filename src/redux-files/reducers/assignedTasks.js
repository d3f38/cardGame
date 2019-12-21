import { GET_ALL_ASSIGNED_TASKS_SUCCES, GET_ALL_ASSIGNED_TASKS_ERROR } from '../actions/get_all_assigned_tasks';
const initionalState = [
    {
        value: '',
        content: ''
    }];

export const assignedTasks = (state = initionalState, action) => {
    switch (action.type) {
    case GET_ALL_ASSIGNED_TASKS_SUCCES:
        return action.payload.assignees;
    case GET_ALL_ASSIGNED_TASKS_ERROR:
        return action.err;
    default:
        return state;
    }
};