import {handleActions} from 'redux-actions';
import apiActionTypes from './actions';

const initialState = {
  data:
    {
      type: 'FeatureCollection',
      name: 'data',
      features: [],
    }
};

const apiFeaturesSuccess = (state, {payload}) => {
  const featuresPrueba = payload.values.filter(row =>
    row.length >= 5
    && row[5]
    && row[3] && typeof row[0] === 'number'
    && row[4] && typeof row[1] === 'number')
    .map(row => ({
      type: 'Feature',
      properties: {
        rate: row[2],
        type: row[3],
        name: row[4],
        description: row[5],
        author: row[6],
        style: row[7],
        price: row[8],
        image: row[9],
        plan: row[10],
        doc: row[11]
      },
      geometry: {
        type: 'Point',
        coordinates: [row[0], row[1]]
      }
    }));
  return {
    ...state,
    data: {
      ...state.data,
      features: featuresPrueba
    },
  };
};

const apiFeaturesError = (state) => ({
  ...state,
  data: [],
});

const apiReducer = handleActions({
  [apiActionTypes.API_GET_FEATURES_SUCCESS]: apiFeaturesSuccess,
  [apiActionTypes.API_GET_FEATURES_ERROR]: apiFeaturesError,
}, initialState);

export default apiReducer;