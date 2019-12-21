import React from 'react';
import { connect } from 'react-redux';
import { getInitialMap } from '../../redux-files/actions/get_initial_map';
import { getInitialRouteCollection } from '../../redux-files/actions/get_initial_route_collection';
import { getActiveFilters } from '../../redux-files/actions/get_active_filters';
import { getFilterTasks } from '../../redux-files/actions/get_filter_tasks';
import { getSelectedTask } from '../../redux-files/actions/get_selected_task';
import { getRoutes } from '../../redux-files/actions/get_routes';
import { cn } from '@bem-react/classname';
import './Map.scss';
import { type } from 'os';
import { showRoute } from '../../utils/showRoute';
import { createPlacemarkLayout } from '../../utils/createPlacemarkLayout';
import ButtonFullscreen from './ButtonFullscreen';

const mapStateToProps = ({activeFilters, initMap, initRouteCollection, filterTasks, routes}) => {
    return {activeFilters, initMap, initRouteCollection, filterTasks, routes};
};

export const createLayer = (ymap, floor) => {
    return function() {
        const layer = new ymap.Layer(floor.tilePath + './%z/tile-%x-%y.png', { });
        layer.getZoomRange = function () { return ymap.vow.resolve([12, 16]); };
        layer.getCopyrights = function () { return ymap.vow.resolve('©'); };
        return layer;
    };
};

const Map = (props) => {
    console.log('render')
    console.log(props)

    ymaps.ready(function () {
        const MAINMAP = props.initMap;
        const FLOOR_NUMBER = props.activeFilters.floor.value;

        if (typeof MAINMAP.setType === 'function' &&
            typeof MAINMAP.geoObjects !== 'undefined') {

            const FLOOR = {
                layerName: 'user#layer',
                mapTypeName: `user#FLOOR${FLOOR_NUMBER}`,
                tilePath: `http://84.201.163.71:8080/static/maps/1/${FLOOR_NUMBER}/`
            };

            const Layer = createLayer(ymaps, FLOOR);
            ymaps.layer.storage.add(FLOOR.layerName, Layer);

            const mapType = new ymaps.MapType(FLOOR.mapTypeName, [FLOOR.layerName]);
            ymaps.mapType.storage.add(FLOOR.mapTypeName, mapType);

            MAINMAP.setType(FLOOR.mapTypeName);
            MAINMAP.setCenter([4096, 0]);
            MAINMAP.geoObjects.removeAll();
            MAINMAP.balloon.close();

            if (props.initRouteCollection.hasOwnProperty('options')) {
                props.initRouteCollection.removeAll();
                MAINMAP.geoObjects.add(props.initRouteCollection);
            }
            const createPlacemark = (task) => {
                const imageSize = 4096;
                const y_our = imageSize - (2 * task.location.y);
                const x_our = 2 * task.location.x;

                const point = new ymaps.Placemark([y_our, x_our], {
                    balloonContent: task.description
                }, {
                    iconLayout: 'default#imageWithContent',
                    iconContent: task.key,
                    iconImageHref: '',
                    iconImageSize: [23, 28],
                    iconImageOffset: [-12, -28],
                    iconContentOffset: [0, 0],
                    iconContentLayout: ymaps.templateLayoutFactory.createClass(
                        createPlacemarkLayout(task.color)
                    )
                });

                point.events.add('click', () => {
                    showRoute(props.initRouteCollection, FLOOR_NUMBER, task.location, props.routes);
                    document.getElementById(task.key).scrollIntoView({block: 'center', behavior: 'smooth'});
                    props.getSelectedTask(task.key);
                });

                MAINMAP.geoObjects.add(point);
                MAINMAP.container.fitToViewport();
            };

            props.filterTasks.forEach(createPlacemark);
        }
    });

    const cnMap = cn('Map');

    return (
        <>
            <div id="map" className={cnMap()}></div>
            {
                <ButtonFullscreen/>
            }
        </>
    );
};

export default connect(mapStateToProps, {getInitialMap, getInitialRouteCollection, getActiveFilters, getFilterTasks, getSelectedTask, getRoutes })(Map);
