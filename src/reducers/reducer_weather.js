import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    console.log('Action received', action);
    switch (action.type) {
        case FETCH_WEATHER:
            // don't mutate origin state, return new array.
            return [action.payload.data, ...state]; 
            // the same as state.concat([action.payload.data])
    }
    return state;
}
