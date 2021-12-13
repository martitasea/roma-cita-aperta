import {handleActions} from 'redux-actions';
import apiActionTypes from './actions';

const initialState = {
  data:
    {
      type: 'FeatureCollection',
      name: 'monuments',
      features: [],
    }
};

const apiFeaturesSuccess = (state, {payload}) => {
  const featuresPrueba = payload.values.filter(row =>
    row.length >= 5
    && row[0]
    && row[3] && typeof row[3] === 'number'
    && row[4] && typeof row[4] === 'number')
    .map(row => ({
      type: 'Feature',
      properties: {
        name: row[0],
        description: row[1],
        type: row[2],
        price: row[5],
        style: row[6],
        image: row[7],
        plan: row[8],
        web: row[9]
      },
      geometry: {
        type: 'Point',
        coordinates: [row[4], row[3]]
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