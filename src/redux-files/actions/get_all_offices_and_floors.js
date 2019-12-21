export const GET_ALL_OFFICES_AND_FLOORS_SUCCES = 'GET_ALL_OFFICES_AND_FLOORS_SUCCES';
export const GET_ALL_OFFICES_AND_FLOORS_ERROR = 'GET_ALL_OFFICES_AND_FLOORS_ERROR';

export const getAllOfficesAndFloors = () => (dispatch) => {
    const url = `http://84.201.163.71:8080/api/v1/offices/all`;
    fetch(url)
        .then(resolve => resolve.json())
        .then(item => {
            dispatch({
                type: GET_ALL_OFFICES_AND_FLOORS_SUCCES,
                payload: item
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_OFFICES_AND_FLOORS_ERROR,
                err: new Error(err)
            });
        });
};