export const showRoute = (routeCollection, floorNumber, taskLocation, routesForFloor) => {
    const helpdeskFloor = 5;
    let сontentInitPoint = '';

    if (floorNumber < helpdeskFloor) {
        сontentInitPoint = `Спуститесь с 5-го этажа`
    } else if (floorNumber > helpdeskFloor) {
        сontentInitPoint = `Поднимитесь на ${floorNumber} этаж`;
    }

    const imageSize = 4096;
    const y_our = imageSize - (2 * taskLocation.y);
    const x_our = 2 * taskLocation.x;

    const bestRoute = findRoute([y_our, x_our], routesForFloor);

    if (bestRoute.length) {
        const myRoute = new ymaps.Polyline(bestRoute, {

        }, {
            balloonCloseButton: false,
            strokeColor: '#0000FF',
            strokeWidth: 3,
            strokeOpacity: 0.8
        });

        routeCollection.removeAll();

        const coordinatesInitPoint = сontentInitPoint && floorNumber === helpdeskFloor ? [3521, 553] : [1926, 3236];

        if (floorNumber !== helpdeskFloor) {
            const initPointOnFloor = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: coordinatesInitPoint
                },
                properties: {
                    iconContent: сontentInitPoint,
                }
            }, {
                preset: 'islands#blackStretchyIcon'
            });
            routeCollection.add(initPointOnFloor);
        }

        
        routeCollection.add(myRoute);
    }

    function findRoute ([y1, x1], routes) {

        if (routes && routes.length) {
            const len = (y1, x1, [y2, x2]) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            const roomPositions = routes.map(item => item[item.length - 1]);
            const lengthsRouteToRoom = roomPositions.map(item => len(y1, x1, item));
            const indexMinRouteToRoom = lengthsRouteToRoom.indexOf(Math.min(...lengthsRouteToRoom));
            const routeToRoom = routes[indexMinRouteToRoom];

            const lengthsRouteToTable = routeToRoom.map(item => len(y1, x1, item));
            const indexMinRouteToTable = lengthsRouteToTable.indexOf(Math.min(...lengthsRouteToTable));
            const findedRoute = routeToRoom.slice(0, indexMinRouteToTable + 1);

            findedRoute.push([y1, x1]);

            return findedRoute;
        }

        return [];

    }
};

