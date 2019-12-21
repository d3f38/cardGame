export const GET_ACTIVE_FILTERS = 'GET_ACTIVE_FILTERS';

export const getActiveFilters = (activeFilter) => (dispatch) => {
    dispatch({
        type: GET_ACTIVE_FILTERS,
        payload: activeFilter
    });
};