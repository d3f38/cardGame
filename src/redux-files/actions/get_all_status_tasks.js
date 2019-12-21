export const GET_ALL_STATUS_TASKS_SUCCES = 'GET_ALL_STATUS_TASKS_SUCCES';
export const GET_ALL_STATUS_TASKS_ERROR = 'GET_ALL_STATUS_TASKS_ERROR';

export const getAllStatusTasks = () => (dispatch) => {
    const url = `http://84.201.163.71:8080/api/v1/statuses`;
    fetch(url)
        .then(resolve => resolve.json())
        .then(item => {
            dispatch({
                type: GET_ALL_STATUS_TASKS_SUCCES,
                payload: item
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_STATUS_TASKS_ERROR,
                err: new Error(err)
            });
        });
};