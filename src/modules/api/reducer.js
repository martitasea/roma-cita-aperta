import {handleActions} from 'redux-actions';
import apiActionTypes from './actions';

const initialState = {
  visit: {
    type: 'FeatureCollection',
    name: 'visit',
    features: [],
  },
  walk: {
    type: 'FeatureCollection',
    name: 'walk',
    features: [],
  },
  accomodation: {
    type: 'FeatureCollection',
    name: 'accomodation',
    features: [],
  },
  commerce: {
    type: 'FeatureCollection',
    name: 'commerce',
    features: [],
  },
  catering: {
    type: 'FeatureCollection',
    name: 'catering',
    features: [],
  },
};

const apiVisitFeaturesSuccess = (state, {payload}) => {
  const visitFeatures = payload.values.filter(row =>
    row.length >= 4
    && row[2] && row[3] && row[4]
    && typeof row[0] === 'number'
    && typeof row[1] === 'number')
    .map(row => ({
      type: 'Feature',
      properties: {
        id: row[2],
        type: row[3],
        name: row[4],
        category: row[5] === ''? undefined : row[5],
        description: row[6] === ''? undefined : row[6],
        author: row[7] === ''? undefined : row[7],
        style: row[8] === ''? undefined : row[8],
        price: row[9] === ''? undefined : row[9],
        web: row[10] === ''? undefined : row[10],
        image: row[11] === ''? undefined : row[11],
        plan: row[12] === ''? undefined : row[12],
        doc: row[13] === ''? undefined : row[13],
        book: row[14] === ''? undefined : row[14],
        alert_timetable: row[15] === ''? undefined : row[15],
        alert_visit: row[16] === ''? undefined : row[16],
        timetable: [
          row[19] !== '' ? {id: 'L', morning: [row[17],row[18]], afternoon: [row[19],row[20]]} : {id: 'L', morning: [row[17],row[18]]},
          row[23] !== '' ? {id: 'M', morning: [row[21],row[22]], afternoon: [row[23],row[24]]} : {id: 'M', morning: [row[21],row[22]]},
          row[27] !== '' ? {id: 'X', morning: [row[25],row[26]], afternoon: [row[27],row[28]]} : {id: 'X', morning: [row[25],row[26]]},
          row[31] !== '' ? {id: 'J', morning: [row[29],row[30]], afternoon: [row[31],row[32]]} : {id: 'J', morning: [row[29],row[30]]},
          row[35] !== '' ? {id: 'V', morning: [row[33],row[34]], afternoon: [row[35],row[36]]} : {id: 'V', morning: [row[33],row[34]]},
          row[39] !== '' ? {id: 'S', morning: [row[37],row[38]], afternoon: [row[39],row[40]]} : {id: 'S', morning: [row[37],row[38]]},
          row[43] !== '' ? {id: 'D', morning: [row[41],row[42]], afternoon: [row[43],row[44]]} : {id: 'D', morning: [row[41],row[42]]}
        ],
      },
      geometry: {
        type: 'Point',
        coordinates: [row[1], row[0]]
      }
    }));
  return {
    ...state,
    visit: {
      ...state.visit,
      features: visitFeatures
    },
  };
};

const apiWalkFeaturesSuccess = (state, {payload}) => {
  const walkFeatures = payload.values.filter(row =>
    row.length >= 4
    && row[2] && row[3] && row[4]
    && typeof row[0] === 'number'
    && typeof row[1] === 'number')
    .map(row => ({
      type: 'Feature',
      properties: {
        id: row[2],
        type: row[3],
        name: row[4],
        category: row[5] === ''? undefined : row[5],
        description: row[6] === ''? undefined : row[6],
        author: row[7] === ''? undefined : row[7],
        style: row[8] === ''? undefined : row[8],
        price: row[9] === ''? undefined : row[9],
        web: row[10] === ''? undefined : row[10],
        image: row[11] === ''? undefined : row[11],
        plan: row[12] === ''? undefined : row[12],
        doc: row[13] === ''? undefined : row[13],
        book: row[14] === ''? undefined : row[14],
        alert_timetable: row[15] === ''? undefined : row[15],
        alert_visit: row[16] === ''? undefined : row[16],
      },
      geometry: {
        type: 'Point',
        coordinates: [row[1], row[0]]
      }
    }));
  return {
    ...state,
    walk: {
      ...state.walk,
      features: walkFeatures
    },
  };
};

const apiAccomodationFeaturesSuccess = (state, {payload}) => {
  const accomodationFeatures = payload.values.filter(row =>
    row.length >= 4
    && row[2] && row[3] && row[4]
    && typeof row[0] === 'number'
    && typeof row[1] === 'number')
    .map(row => ({
      type: 'Feature',
      properties: {
        id: row[2],
        type: row[3],
        name: row[4],
        category: row[5] === ''? undefined : row[5],
        description: row[6] === ''? undefined : row[6],
        author: row[7] === ''? undefined : row[7],
        style: row[8] === ''? undefined : row[8],
        price: row[9] === ''? undefined : row[9],
        web: row[10] === ''? undefined : row[10],
        image: row[11] === ''? undefined : row[11],
        plan: row[12] === ''? undefined : row[12],
        doc: row[13] === ''? undefined : row[13],
        book: row[14] === ''? undefined : row[14],
        alert_timetable: row[15] === ''? undefined : row[15],
        alert_visit: row[16] === ''? undefined : row[16],
      },
      geometry: {
        type: 'Point',
        coordinates: [row[1], row[0]]
      }
    }));
  return {
    ...state,
    accomodation: {
      ...state.accomodation,
      features: accomodationFeatures
    },
  };
};

const apiCommerceFeaturesSuccess = (state, {payload}) => {
  const commerceFeatures = payload.values.filter(row =>
    row.length >= 4
    && row[2] && row[3] && row[4]
    && typeof row[0] === 'number'
    && typeof row[1] === 'number')
    .map(row => ({
      type: 'Feature',
      properties: {
        id: row[2],
        type: row[3],
        name: row[4],
        category: row[5] === ''? undefined : row[5],
        description: row[6] === ''? undefined : row[6],
        author: row[7] === ''? undefined : row[7],
        style: row[8] === ''? undefined : row[8],
        price: row[9] === ''? undefined : row[9],
        web: row[10] === ''? undefined : row[10],
        image: row[11] === ''? undefined : row[11],
        plan: row[12] === ''? undefined : row[12],
        doc: row[13] === ''? undefined : row[13],
        book: row[14] === ''? undefined : row[14],
        alert_timetable: row[15] === ''? undefined : row[15],
        alert_visit: row[16] === ''? undefined : row[16],
      },
      geometry: {
        type: 'Point',
        coordinates: [row[1], row[0]]
      }
    }));
  return {
    ...state,
    commerce: {
      ...state.commerce,
      features: commerceFeatures
    },
  };
};

const apiCateringFeaturesSuccess = (state, {payload}) => {
  const cateringFeatures = payload.values.filter(row =>
    row.length >= 4
    && row[2] && row[3] && row[4]
    && typeof row[0] === 'number'
    && typeof row[1] === 'number')
    .map(row => ({
      type: 'Feature',
      properties: {
        id: row[2],
        type: row[3],
        name: row[4],
        category: row[5] === ''? undefined : row[5],
        description: row[6] === ''? undefined : row[6],
        author: row[7] === ''? undefined : row[7],
        style: row[8] === ''? undefined : row[8],
        price: row[9] === ''? undefined : row[9],
        web: row[10] === ''? undefined : row[10],
        image: row[11] === ''? undefined : row[11],
        plan: row[12] === ''? undefined : row[12],
        doc: row[13] === ''? undefined : row[13],
        webTrip: row[14] === ''? undefined : row[14],
        alert_timetable: row[15] === ''? undefined : row[15],
        alert_visit: row[16] === ''? undefined : row[16],
      },
      geometry: {
        type: 'Point',
        coordinates: [row[1], row[0]]
      }
    }));
  return {
    ...state,
    catering: {
      ...state.catering,
      features: cateringFeatures
    },
  };
};

const apiVisitFeaturesError = (state) => ({
  ...state,
  visit: [],
});
const apiWalkFeaturesError = (state) => ({
  ...state,
  walk: [],
});
const apiAccomodationFeaturesError = (state) => ({
  ...state,
  accomodation: [],
});
const apiCommerceFeaturesError = (state) => ({
  ...state,
  commerce: [],
});
const apiCateringFeaturesError = (state) => ({
  ...state,
  catering: [],
});

const apiReducer = handleActions({
  [apiActionTypes.API_GET_VISIT_FEATURES_SUCCESS]: apiVisitFeaturesSuccess,
  [apiActionTypes.API_GET_VISIT_FEATURES_ERROR]: apiVisitFeaturesError,
  [apiActionTypes.API_GET_WALK_FEATURES_SUCCESS]: apiWalkFeaturesSuccess,
  [apiActionTypes.API_GET_WALK_FEATURES_ERROR]: apiWalkFeaturesError,
  [apiActionTypes.API_GET_ACCOMODATION_FEATURES_SUCCESS]: apiAccomodationFeaturesSuccess,
  [apiActionTypes.API_GET_ACCOMODATION_FEATURES_ERROR]: apiAccomodationFeaturesError,
  [apiActionTypes.API_GET_COMMERCE_FEATURES_SUCCESS]: apiCommerceFeaturesSuccess,
  [apiActionTypes.API_GET_COMMERCE_FEATURES_ERROR]: apiCommerceFeaturesError,
  [apiActionTypes.API_GET_CATERING_FEATURES_SUCCESS]: apiCateringFeaturesSuccess,
  [apiActionTypes.API_GET_CATERING_FEATURES_ERROR]: apiCateringFeaturesError,
}, initialState);

export default apiReducer;