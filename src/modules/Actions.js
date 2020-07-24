import { createAction } from '@reduxjs/toolkit'
import { REQUEST_IMAGES, REQUEST_IMAGES_SUCCESS, REQUEST_IMAGES_ERROR } from './constants'

export const requestImages = createAction(REQUEST_IMAGES)
export const requestImagesSuccess = createAction(REQUEST_IMAGES_SUCCESS)
export const requestImagesError = createAction(REQUEST_IMAGES_ERROR)

export const fetchImages = (dispatch) => {
  dispatch(requestImages())
  return fetch('../images.json')
    .then((res) => res.json())
    .then((data) => {
      dispatch(requestImagesSuccess(data.images))
    })
    .catch((err) => dispatch(requestImagesError(err)))
}
