import { GET_FILTER_TASKS_SUCCES, GET_FILTER_TASKS_ERROR } from '../actions/get_filter_tasks';
const initionalState = [{
    status: '',
    components: '',
    floor: '',
    assignee: '',
    fixVersions: 1,
    location: {
        y: '',
        x: ''
    },
    priority: ''
}];


export const filterTasks = (state = initionalState, action) => {
    switch (action.type) {
    case GET_FILTER_TASKS_SUCCES:
        return action.payload.tasks;
    case GET_FILTER_TASKS_ERROR:
        return action.err;
    default:
        return state;
    }
};