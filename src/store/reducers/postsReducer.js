import Types from '../types'

export const initialState = {
    posts: [],
    selectedPost: {},
    spinnerHandle: false
};

export const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ALL_POST:
            return {
                ...state,
                posts: action.payLoad
            };
        case Types.CLEAN_UP_ALL_POSTS:
            return {
                ...state,
                posts: []
            };
        case Types.GET_POST_BY_ID:
            return {
                ...state,
                selectedPost: action.payLoad
            };
        case Types.CLEAN_UP_SELECTED_POST:
            return {
                ...state,
                selectedPost: {}
            };
        case Types.SPINNER_CONTROLLER:
            return {
                ...state,
                spinnerHandle: action.payLoad
            };
        default:
            return state;
    }
};