import {handleActions} from 'redux-actions';

import ActionTypes from './actions';

export const initialState = {
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: 41.895,
    longitude: 12.475,
    zoom: 13,
    bearing: 0,
    pitch: 0,
  },
};

export const updateViewport = (state, action) => ({
  ...state,
  viewport: {
    ...state.viewport,
    ...action.payload
  }
});

export const appReducer = handleActions({
  [ActionTypes.SET_VIEWPORT]: updateViewport,
}, initialState);

export default appReducer;