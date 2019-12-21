export const GET_INITIAL_ROUTE_COLLECTION = 'GET_INITIAL_ROUTE_COLLECTION';

export const getInitialRouteCollection = () => (dispatch) => {
    ymaps.ready(() => {

        const routeCollection = new ymaps.GeoObjectCollection({}, {});
       

        dispatch({
            type: GET_INITIAL_ROUTE_COLLECTION,
            routeCollection: routeCollection
        });
    });
};

