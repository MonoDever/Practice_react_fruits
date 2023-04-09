import Action from './Actions'

const initialState = {
    loading: "",
    error: "",
    data: []
}

function apiReducer(state = initialState, action) {
    switch (action.type) {
        case Action.SET_DATA_FECTH_START:
            return { ...state, loading: 'yes' };
        case "DATA_FETCH_SUCCESS":
            return { ...state, loading: '', data: action.payload };
        case "DATA_FETCH_ERROR":
            return { ...state, data: [], error: action.payload };
            default:
                return state;
    };
}

export default apiReducer