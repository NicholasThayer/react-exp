//uploadActions.js

import UploadApi from '../api/uploadApi'

export const CREATE_UPLOAD = '[Upload] CREATE_UPLOAD';
export const CREATE_UPLOAD_SUCCESS = '[Upload] CREATE_UPLOAD_SUCCESS';
export const CREATE_UPLOAD_ERROR  = '[Upload] CREATE_UPLOAD_ERROR';

//Read
export const GET_UPLOADS = '[Upload] GET_UPLOAD' 
export const GET_UPLOADS_SUCCESS = '[Upload] GET_UPLOAD_SUCCESS' 
export const GET_UPLOADS_ERROR = '[Upload] GET_UPLOAD_ERROR' 


//Update
export const START_EDITING ='[Upload] START_EDITING'
export const CANCEL_EDITING = '[Upload] CANCEL_EDITING'

export const UPDATE_UPLOAD = '[Upload] UPDATE_UPLOAD' 
export const UPDATE_UPLOAD_SUCCESS = '[Upload] UPDATE_UPLOAD_SUCCESS' 
export const UPDATE_UPLOAD_ERROR = '[Upload] UPDATE_UPLOAD_ERROR' 

export const COMPLETE_UPLOAD = 'COMPLETE_UPLOAD'


//Delete
export const DELETE_UPLOAD = '[Upload] DELETE_UPLOAD' 
export const DELETE_UPLOAD_SUCCESS = '[Upload] DELETE_UPLOAD_SUCCESS' 
export const DELETE_UPLOAD_ERROR = '[Upload] DELETE_UPLOAD_ERROR' 



 
//These are the action types Also ordered in CRUD Order.

//Create

//The dispatch and getstate function is provided by the Redux-Thunk middleware, we can dispatch actions with it.

export function CreateUpload(upload){
    return (dispatch, getState) => {
        return UploadApi.createUpload(upload).then(res => {
            dispatch(CreateUploadSuccess(res.data.data))
        })
    }
}

export function CreateUploadSuccess(upload){
    return {
        type:CREATE_UPLOAD_SUCCESS,
        upload
    }
}


//Read
export function GetUploads(){
    return (dispactch, getState) => {
        return UploadApi.getUpload().then(res => {
            dispactch(GetUploadSuccess(res))
        })
    }
}

export function GetUploadSuccess(uploads){
    return {
        type:GET_UPLOADS_SUCCESS,
        uploads
    }
}


//Update
export function StartEditing(_id) {
    return {
        type: START_EDITING,
        _id
    }
}
export function CancelEditing(_id) {
    return {
        type: CANCEL_EDITING,
        _id
    }
}

export function UpdateUpload(upload) {
    return (dispatch, getState) => {
        
        //Multiple actions can be sent usign the Redux-Thunk middleware

        dispatch({
            type: UPDATE_UPLOAD,
            upload
        })
        UploadApi.updateUpload(upload).then(res => {
            dispatch(UpdateUploadSuccess(res.data.data))
        })
    }
}
export function UpdateUploadSuccess(upload) {
    return {
        type: UPDATE_UPLOAD_SUCCESS,
        upload,
        _id: upload._id
    }
}


//Delete
export function DeleteUpload(upload) {
    return (dispatch, getState) => {
        dispatch({
            type: DELETE_UPLOAD,
            upload
        })
        UploadApi.removeUpload(upload).then(res => {
            if (res.status === 204) {
                dispatch(DeleteUploadSuccess(upload))
            }
        })
    }
}
export function DeleteUploadSuccess(upload) {
    return {
        type: DELETE_UPLOAD_SUCCESS,
        upload,
        _id: upload._id
    }
}