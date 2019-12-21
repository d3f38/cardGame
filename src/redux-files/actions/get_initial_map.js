export const GET_INITIAL_MAP = 'GET_INITIAL_MAP';

export const getInitialMap = () => (dispatch) => {
    ymaps.ready(() => {

        const MAX_ZOOM = 16;
        const PIC_WIDTH = 4096;
        const PIC_HEIGHT = 4096;

        const FLOOR = {
            layerName: 'user#layer',
            mapTypeName: 'user#FLOOR0',
            tilePath: `http://84.201.163.71:8080/static/maps/1/2/`
        };

        const Layer = createLayer(ymaps, FLOOR);
        ymaps.layer.storage.add(FLOOR.layerName, Layer);
        const mapType = new ymaps.MapType(FLOOR.mapTypeName, [FLOOR.layerName]);
        ymaps.mapType.storage.add(FLOOR.mapTypeName, mapType);

        const worldSize = Math.pow(2, MAX_ZOOM) * 256;

        const zoomControl = new ymaps.control.ZoomControl({
            options: {
                size: 'small',
                position: {right: '10px', bottom: '50px'}
            }
        });

        const MAINMAP = new ymaps.Map('map', {
            center: [4096, 0],
            zoom: 12,
            controls: [zoomControl],
            type: FLOOR.mapTypeName,
            fullscreenZIndex: 1,
        },
        {
            projection: new ymaps.projection.Cartesian([[PIC_HEIGHT - worldSize, 0], [PIC_HEIGHT, worldSize]], [false, false]),
            restrictMapArea: [[0, 0], [PIC_HEIGHT, PIC_WIDTH]]
        });

        dispatch({
            type: GET_INITIAL_MAP,
            map: MAINMAP
        });
    });
};

function createLayer(ymap, floor) {
    return function() {
        const layer = new ymap.Layer(floor.tilePath + './%z/tile-%x-%y.png', { });
        layer.getZoomRange = function () { return ymap.vow.resolve([12, 16]); };
        layer.getCopyrights = function () { return ymap.vow.resolve('©'); };
        return layer;
    };
}