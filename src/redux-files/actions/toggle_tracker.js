export const TOGGLE_TRACKER = 'TOGGLE_TRACKER';

export const toggleTracker = (href) => (dispatch) => {
    dispatch({
        type: TOGGLE_TRACKER,
        payload: href
    });
};