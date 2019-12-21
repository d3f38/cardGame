export const GET_FILTER_TASKS_SUCCES = 'GET_FILTER_TASKS_SUCCES';
export const GET_FILTER_TASKS_ERROR = 'GET_FILTER_TASKS_ERROR';

export const getFilterTasks = (data) => (dispatch) => {
    const url = `http://84.201.163.71:8080/api/v1/filter`;
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
        .then(resolve => resolve.json())
        .then(item => {
            dispatch({
                type: GET_FILTER_TASKS_SUCCES,
                payload: item
            });
        })
        .catch(err => {
            dispatch({
                type: GET_FILTER_TASKS_ERROR,
                err: new Error(err)
            });
        });
};