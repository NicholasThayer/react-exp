//uploadReducers.js

//pretty sure * as is supoerflous //import * as UploadActions from "../actions/uploadActions";
import * as UploadActions from "../actions/uploadActions";

// We are dividing the reducers using a technique called Reducer composition.
// By doing this we are seperating the reducer for the Collection and the Individual Item


//The collection Reducer, It handles only the collection
export function UploadListReducer(state = [], action){

  //cases in crud order
  switch (action.type){


    //create
    case UploadActions.CREATE_UPLOAD_SUCCESS:{
      return[
        ...state,
        action.upload
      ]; 
    }

    //read
    case UploadActions.GET_UPLOADS_SUCCESS:{
      return action.uploads.data.data.docs;
    }

    //update
    case UploadActions.START_EDITING:{
      return state.map( s => upload( s, action ))
    }

    case UploadActions.CANCEL_EDITING:{
      return  state.map( s => upload( s, action ))
    }

    case UploadActions.UPDATE_UPLOAD:{
      return state.map( s => upload( s, action ))
    }

    case UploadActions.UPDATE_UPLOAD_SUCCESS:{
      return state.map( s => upload( s, action ))
    }

    //delete
    case UploadActions.DELETE_UPLOAD:{
      return state.map( s => upload( s, action ))
    }

    case UploadActions.DELETE_UPLOAD_SUCCESS:{
      return state.map( s => upload( s, action ))
    }

    default: return state;
  }
}


//The individual Reducer. It handles only one Upload Object.
const upload = (state, action) =>{
  // If the mapped upload of the previous state matches with the new ID of the action, 
  // Only then proceed to the Reducer Switch case
  if(state._id !== (action._id || action.upload.id)){
    return state;
  }

  switch (action.type){
    case UploadActions.START_EDITING:{
      return {
        ...state,
        editing: true
      }
    }

    case UploadActions.CANCEL_EDITING:{
      return{
        ...state,
        editing: false
      } 
    }

    case UploadActions.UPDATE_UPLOAD:{
      return {
        ...state,
        editing: false
      }
    }

    case UploadActions.UPDATE_UPLOAD_SUCCESS:{
      return {
        ...state,
        ...action.upload,
        updating: false
      }
    }

    case UploadActions.DELETE_UPLOAD:{
      return {
        ...state,
        deleting: false
      }
    }

    case UploadActions.DELETE_UPLOAD_SUCCESS:{
      return {
        ...state,
        deleting: false
      }
    }

    default: return state;
  }
}
