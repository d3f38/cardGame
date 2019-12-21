import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { getInitialMap } from '../../redux-files/actions/get_initial_map';
// import { getInitialRouteCollection } from '../../redux-files/actions/get_initial_route_collection';
// import { getAllOfficesAndFloors } from '../../redux-files/actions/get_all_offices_and_floors';
// import { getAllStatusTasks } from '../../redux-files/actions/get_all_status_tasks';
// import { getAllTypeTasks } from '../../redux-files/actions/get_all_type_tasks';
// import { getFilterPriority } from '../../redux-files/actions/get_all_priority_tasks';
// import { getAllAssignedTasks } from '../../redux-files/actions/get_all_assigned_tasks';
// import { getSelectedTask } from '../../redux-files/actions/get_selected_task';
// import { getRoutes } from '../../redux-files/actions/get_routes';

import { getAmountCards } from '../../redux-files/actions/get_amount_cards';
import { getSelectedDeck } from '../../redux-files/actions/get_selected_deck';

import PageLayout from '../../components/PageLayout/PageLayout';
// import ReportTable from '../../components/ReportTable/ReportTable';
import './index.scss';

const mapStateToProps = ({}) => {
    return {};
};

const IndexPage = (props) => {
    useEffect(() => {
        props.getAmountCards();
        props.getSelectedDeck();
    }, []);

    return (
        <PageLayout>
            
        </PageLayout>
    );
};

export default connect(mapStateToProps,
    {
        // getInitialMap,
        // getInitialRouteCollection,
        // getAllOfficesAndFloors,
        // getAllStatusTasks,
        // getAllTypeTasks,
        // getFilterPriority,
        // getAllAssignedTasks,
        // getSelectedTask,
        getAmountCards,
        getSelectedDeck
    })(IndexPage);