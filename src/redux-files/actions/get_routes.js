export const GET_ROUTES_SUCCES = 'GET_ROUTES_SUCCES';
export const GET_ROUTES_ERROR = 'GET_ROUTES_ERROR';

export const getRoutes = (bcs = 1, floor = 2) => (dispatch) => {
    const url = `http://84.201.163.71:8080/api/v1/routes/${bcs}/${floor}`;

    fetch(url)
        .then(resolve => resolve.json())
        .then(item => {
            dispatch({
                type: GET_ROUTES_SUCCES,
                payload: item
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ROUTES_ERROR,
                err: new Error(err)
            });
        });
};