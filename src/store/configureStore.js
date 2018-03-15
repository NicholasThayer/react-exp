import {createStore, applyMiddleware} from 'redux';

import thunkMiddleware from 'redux-thunk'

import { createLogger } from 'redux-logger'

import rootReducer from '../reducers/rootReducer';

const logger = createLogger();

export function configureStore(preloadedState){

  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      logger 
    )
  )
}