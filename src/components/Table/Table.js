import React from 'react';
import { cn } from '@bem-react/classname';
import styles from './Table.scss';
import { connect } from 'react-redux';
import { showRoute } from '../../utils/showRoute';
import { getInitialRouteCollection } from '../../redux-files/actions/get_initial_route_collection';
import { getSelectedTask } from '../../redux-files/actions/get_selected_task';
import { getRoutes } from '../../redux-files/actions/get_routes';
import { toggleTracker } from '../../redux-files/actions/toggle_tracker';

const cnTable = cn('Table');

const mapStateToProps = ({ filterTasks, activeFilters, initMap, initRouteCollection, selectedTask, tracker, routes }) => {
    return { filterTasks, activeFilters, initMap, initRouteCollection, selectedTask, tracker, routes };
};

const showPoint = (initCollection, map, location, taskName) => {
    if (initCollection.hasOwnProperty('options')) {
        const imageSize = 4096;
        const y_our = imageSize - (2 * location.y);
        const x_our = 2 * location.x;
        map.balloon.open([y_our, x_our], taskName);
    }
};

const Table = (props) => {
    const handleShowTracker = () => {
        props.toggleTracker('http://84.201.163.71:8080/static/tracker_images/tracker_example.jpg');
    };
    
    const renderRow = (item, index) => {
        const classSelectedRow = item.key === props.selectedTask ? cnTable('Row', {selected: true}) : cnTable('Row');
        
        return <div className={classSelectedRow} id={item.key} key={index} onClick={() => {
            // props.initMap.geoObjects.removeAll();
            props.initRouteCollection.removeAll();
            props.getSelectedTask(item.key);
            handleShowTracker();
            showPoint(props.initRouteCollection, props.initMap, props.filterTasks[index].location, props.filterTasks[index].description);
            showRoute(props.initRouteCollection, props.activeFilters.floor.value, props.filterTasks[index].location, props.routes);
        }}>
            {['task_name', 'type', 'author', 'executor', 'status', 'priority'].map((cell, index) => <div
                key={index}
                className={cnTable('Cell')}>
                {item[cell]}
            </div>)}
        </div>;
    };

    const renderHead = () => {
        return <div className={cnTable('Row'), cnTable('Head')}>
            {props.headers.map((cell, index) => <div
                key={index}
                className={cnTable('Cell')}>
                {cell}
            </div>)}
        </div>;
    };

    const renderError = () => {
        return <div>
            Не удалось загрузить данные
        </div>;
    };

    return <div className={cnTable()}>
        {renderHead()}
        {Array.isArray(props.data) ? props.data.map(renderRow) : renderError()}
    </div>;


};

export default connect(mapStateToProps, {getInitialRouteCollection, toggleTracker, getSelectedTask, getRoutes})(Table);
