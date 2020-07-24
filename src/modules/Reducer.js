import { createReducer } from '@reduxjs/toolkit'
import { REQUEST_IMAGES, REQUEST_IMAGES_SUCCESS, REQUEST_IMAGES_ERROR } from './constants'

const INITIAL_STATE = {
  isFetching: false,
  images: [],
  error: null,
}

const HANDLERS = {
  [REQUEST_IMAGES]: (state) => ({ ...state, isFetching: true }),
  [REQUEST_IMAGES_SUCCESS]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    images: payload,
  }),
  [REQUEST_IMAGES_ERROR]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    error: payload,
  }),
}

export const rootReducer = createReducer(INITIAL_STATE, HANDLERS)
