import * as actions from '../actions/actions';

export const initialState = {
    errors: '',
    smurfs: [],
    adding: false,
    fetching: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_SMURF_START:
            return {
                ...state, fetching: true
            }
        case actions.FETCH_SMURF_SUCCESS:
            return {
                ...state, smurfs: action.payload, fetching: false, errors: ''
            }
        case actions.FETCH_SMURF_ERROR:
            return {
                ...state, errors: action.payload, fetching: false
            }

        case actions.ADD_SMURF_START:
            return {
                ...state, adding: true
            };
        case actions.ADD_SMURF_SUCCESS:
            return {
                ...state, adding: false, smurfs: action.payload, errors: ''
            };
        case actions.ADD_SMURF_ERROR:
            return {
                ...state, errors: action.payload
            };

        default:
            return state
    }
}

export default reducer;