import checker from './checker'
import logger from './logger'
import * as  thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'

export default applyMiddleware(
    checker,
    logger,
    thunk.default,
)