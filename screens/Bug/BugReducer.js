import BugConstants from './BugConstants';

const initialState = {
    bugs: []
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case BugConstants.LIST_BUGS:
            return {
                ...state,
                bugs: action.payload
            }
        case BugConstants.LIST_BUGS_ERROR:
            return {
                ...state,
                bugs: [],
                error: action.error
            }
        default:
            return state;
    }
}