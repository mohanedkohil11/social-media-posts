import Types from '../types'
import Requester from '../../utils/Requester'

export const GET_ALL_POST = async (dispatch) => {

    await Requester.get('/posts')
        .then((response) => {
            dispatch({
                type: Types.GET_ALL_POST,
                payLoad: response.data
            })
        })
        .catch((error) => {
            window.alert('Handling Error')
        })
};

export const GET_POST_BY_ID = (postId, dispatch) => {

    return async function () {

        await Requester.get('/posts', postId)
            .then((response) => {
                dispatch({
                    type: Types.GET_POST_BY_ID,
                    payLoad: response
                })
            })
            .catch((error) => {
                window.alert('Handling Error')
            })
    }

};

export const UPDATE_POST = (postData) => {
    return async function () {
        await Requester.patch('/posts', postData)
            .then((response) => {
                window.alert('Post Updated successfully')
            })
            .catch((error) => {
                window.alert('Handling Error')
            })
    }
};

export const DELETE_POST = (postId) => {
    return async function () {
        await Requester.delete('/posts', postId)
            .then((response) => {
                window.alert('Post Deleted successfully')
            })
            .catch((error) => {
                window.alert('Handling Error')
            })
    }
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