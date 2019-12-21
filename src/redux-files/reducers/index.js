import { combineReducers } from 'redux';

// import { tasks } from './tasks';
// import { officesList } from './officesList';
// import { activeFilters } from './activeFilters';
// import { typeTasks } from './typeTasks';
// import { initMap } from './initMap';
// import { initRouteCollection } from './initRouteCollection';
// import { statusTasks } from './statusTasks';
// import { filterTasks } from './filterTasks';
// import { priorityTasks } from './priorityTasks';
// import { assignedTasks } from './assignedTasks';
// import { selectedTask } from './selectedTask';
// import { routes } from './routes';
// import { tracker } from './toggleTracker';

import { amountCards } from './amountCards';
import { selectedDeck } from './selectedDeck';

// import { imagesCards } from './imagesCards';


export default combineReducers({
    // tasks,
    // officesList,
    // activeFilters,
    // typeTasks,
    // initMap,
    // initRouteCollection,
    // statusTasks,
    // filterTasks,
    // priorityTasks,
    // assignedTasks,
    // selectedTask,
    // routes,
    // tracker,

    amountCards,
    selectedDeck
});
