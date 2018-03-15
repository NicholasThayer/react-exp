import {combineReducers} from 'redux'

import { UploadListReducer } from './uploadReducer';

//root reducer
const rootReducer = combineReducers({
  uploads: UploadListReducer
})

export default rootReducer;