import Types from '../types'
import Requester from '../../utils/Requester'
import history from "../../utils/History";

export const GET_ALL_POST = async (dispatch) => {

    dispatch({
        type: Types.SPINNER_CONTROLLER,
        payLoad: true
    });

    await Requester.get('/posts')
        .then((response) => {
            dispatch({
                type: Types.SPINNER_CONTROLLER,
                payLoad: false
            });

            dispatch({
                type: Types.GET_ALL_POST,
                payLoad: response.data
            })
        })
        .catch((error) => {
            dispatch({
                type: Types.SPINNER_CONTROLLER,
                payLoad: false
            })
            window.alert('Handling Error')
        })
};

export const GET_POST_BY_ID = async (postId, dispatch) => {

    dispatch({
        type: Types.SPINNER_CONTROLLER,
        payLoad: true
    })
    await Requester.get(`/posts/${postId}`)
        .then((response) => {
            dispatch({
                type: Types.SPINNER_CONTROLLER,
                payLoad: false
            })
            dispatch({
                type: Types.GET_POST_BY_ID,
                payLoad: response.data
            })
        })
        .catch((error) => {
            dispatch({
                type: Types.SPINNER_CONTROLLER,
                payLoad: false
            })
            window.alert('Handling Error')
        })


};

export const UPDATE_POST = async (postData) => {
    console.log('run');
    await Requester.patch(`/posts/${postData.id}`, postData)
        .then((response) => {
            window.alert('Post Updated successfully')
        })
        .catch((error) => {
            window.alert('Handling Error')
        })
};

export const DELETE_POST = async (postId) => {
    await Requester.delete(`/posts/${postId}`)
        .then((response) => {
            history.push('/');
            window.alert('Post Deleted successfully');
        })
        .catch((error) => {
            window.alert('Handling Error')
        })
};

export const CLEAN_UP_ALL_POSTS = (dispatch) => {
    dispatch({
        type: Types.CLEAN_UP_ALL_POSTS,
    })
};

export const CLEAN_UP_SELECTED_POST = (dispatch) => {
    dispatch({
        type: Types.CLEAN_UP_SELECTED_POST,
    })
};