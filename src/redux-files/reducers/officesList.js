import { GET_ALL_OFFICES_AND_FLOORS_SUCCES,  GET_ALL_OFFICES_AND_FLOORS_ERROR} from '../actions/get_all_offices_and_floors';
const initionalState = [{
    content: '',
    floors: [
        { content: '', value: '', id: '' },
    ],
    id: '',
    value: '1'
}];

export const officesList = (state = initionalState, action) => {
    switch (action.type) {

    case GET_ALL_OFFICES_AND_FLOORS_SUCCES:
        return action.payload.offices;
    case GET_ALL_OFFICES_AND_FLOORS_ERROR:
        return action.err;
    default:
        return state;
    }
};