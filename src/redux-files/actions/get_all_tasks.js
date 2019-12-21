export const GET_ALL_TASKS_SUCCES = 'GET_ALL_TASKS_SUCCES';
export const GET_ALL_TASKS_ERROR = 'GET_ALL_TASKS_ERROR';

export const getAllTasks = ({floor = 2, bcs = 1}) => (dispatch) => {
    const url = `http://84.201.163.71:8080/api/v1/offices/${bcs}/floors/${floor}`;
    fetch(url)
        .then(resolve => resolve.json())
        .then(item => {
            dispatch({
                type: GET_ALL_TASKS_SUCCES,
                payload: item
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_TASKS_ERROR,
                err: new Error(err)
            });
        });
};