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
    && row[2] && row[3]
    && typeof row[0] === 'number'
    && typeof row[1] === 'number')
    .map(row => ({
      type: 'Feature',
      properties: {
        id: row[2],
        type: row[3],
        name: row[4],
        category: row[5],
        description: row[6],
        author: row[7],
        style: row[8],
        price: row[9],
        web: row[10],
        image: row[11],
        plan: row[12],
        doc: row[13],
        alert_timetable: row[14],
        alert_visit: row[15],
        timetable: [
          {
            id:'1',
            label:'L',
            opening: {
              open: row[16],
              closed: row[17]
            }
          },
          {
            id:'2',
            label:'M',
            opening: {
              open: row[18],
              closed: row[19]
            }
          },
          {
            id:'3',
            label:'X',
            opening: {
              open: row[20],
              closed: row[21]
            }
          },
          {
            id:'4',
            label:'J',
            opening: {
              open: row[22],
              closed: row[23]
            }
          },
          {
            id:'5',
            label:'V',
            opening: {
              open: row[24],
              closed: row[25]
            }
          },
          {
            id:'6',
            label:'S',
            opening: {
              open: row[26],
              closed: row[27]
            }
          },{
            id:'0',
            label:'D',
            opening: {
              open: row[28],
              closed: row[29]
            }
          },
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
    && row[4] && row[3]
    && typeof row[0] === 'number'
    && typeof row[1] === 'number')
    .map(row => ({
      type: 'Feature',
      properties: {
        rate: row[2],
        type: row[3],
        name: row[4],
        category: row[5],
        description: row[6],
        author: row[7],
        style: row[8],
        price: row[9],
        image: row[10],
        plan: row[11],
        doc: row[12],
        alert_timetable: row[27],
        alert_visit: row[28],
        timetable: [
          {
            id:'1',
            label:'L',
            opening: {
              open: row[13],
              closed: row[14]
            }
          },
          {
            id:'2',
            label:'M',
            opening: {
              open: row[15],
              closed: row[16]
            }
          },
          {
            id:'3',
            label:'X',
            opening: {
              open: row[17],
              closed: row[18]
            }
          },
          {
            id:'4',
            label:'J',
            opening: {
              open: row[19],
              closed: row[20]
            }
          },
          {
            id:'5',
            label:'V',
            opening: {
              open: row[21],
              closed: row[22]
            }
          },
          {
            id:'6',
            label:'S',
            opening: {
              open: row[23],
              closed: row[24]
            }
          },{
            id:'0',
            label:'D',
            opening: {
              open: row[25],
              closed: row[26]
            }
          },
        ]
      },
      geometry: {
        type: 'Point',
        coordinates: [row[0], row[1]]
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
    && row[4] && row[3]
    && typeof row[0] === 'number'
    && typeof row[1] === 'number')
    .map(row => ({
      type: 'Feature',
      properties: {
        rate: row[2],
        type: row[3],
        name: row[4],
        category: row[5],
        description: row[6],
        author: row[7],
        style: row[8],
        price: row[9],
        image: row[10],
        plan: row[11],
        doc: row[12],
        alert_timetable: row[27],
        alert_visit: row[28],
        timetable: [
          {
            id:'1',
            label:'L',
            opening: {
              open: row[13],
              closed: row[14]
            }
          },
          {
            id:'2',
            label:'M',
            opening: {
              open: row[15],
              closed: row[16]
            }
          },
          {
            id:'3',
            label:'X',
            opening: {
              open: row[17],
              closed: row[18]
            }
          },
          {
            id:'4',
            label:'J',
            opening: {
              open: row[19],
              closed: row[20]
            }
          },
          {
            id:'5',
            label:'V',
            opening: {
              open: row[21],
              closed: row[22]
            }
          },
          {
            id:'6',
            label:'S',
            opening: {
              open: row[23],
              closed: row[24]
            }
          },{
            id:'0',
            label:'D',
            opening: {
              open: row[25],
              closed: row[26]
            }
          },
        ]
      },
      geometry: {
        type: 'Point',
        coordinates: [row[0], row[1]]
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
    && row[4] && row[3]
    && typeof row[0] === 'number'
    && typeof row[1] === 'number')
    .map(row => ({
      type: 'Feature',
      properties: {
        rate: row[2],
        type: row[3],
        name: row[4],
        category: row[5],
        description: row[6],
        author: row[7],
        style: row[8],
        price: row[9],
        image: row[10],
        plan: row[11],
        doc: row[12],
        alert_timetable: row[27],
        alert_visit: row[28],
        timetable: [
          {
            id:'1',
            label:'L',
            opening: {
              open: row[13],
              closed: row[14]
            }
          },
          {
            id:'2',
            label:'M',
            opening: {
              open: row[15],
              closed: row[16]
            }
          },
          {
            id:'3',
            label:'X',
            opening: {
              open: row[17],
              closed: row[18]
            }
          },
          {
            id:'4',
            label:'J',
            opening: {
              open: row[19],
              closed: row[20]
            }
          },
          {
            id:'5',
            label:'V',
            opening: {
              open: row[21],
              closed: row[22]
            }
          },
          {
            id:'6',
            label:'S',
            opening: {
              open: row[23],
              closed: row[24]
            }
          },{
            id:'0',
            label:'D',
            opening: {
              open: row[25],
              closed: row[26]
            }
          },
        ]
      },
      geometry: {
        type: 'Point',
        coordinates: [row[0], row[1]]
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
    && row[4] && row[3]
    && typeof row[0] === 'number'
    && typeof row[1] === 'number')
    .map(row => ({
      type: 'Feature',
      properties: {
        rate: row[2],
        type: row[3],
        name: row[4],
        category: row[5],
        description: row[6],
        author: row[7],
        style: row[8],
        price: row[9],
        image: row[10],
        plan: row[11],
        doc: row[12],
        alert_timetable: row[27],
        alert_visit: row[28],
        timetable: [
          {
            id:'1',
            label:'L',
            opening: {
              open: row[13],
              closed: row[14]
            }
          },
          {
            id:'2',
            label:'M',
            opening: {
              open: row[15],
              closed: row[16]
            }
          },
          {
            id:'3',
            label:'X',
            opening: {
              open: row[17],
              closed: row[18]
            }
          },
          {
            id:'4',
            label:'J',
            opening: {
              open: row[19],
              closed: row[20]
            }
          },
          {
            id:'5',
            label:'V',
            opening: {
              open: row[21],
              closed: row[22]
            }
          },
          {
            id:'6',
            label:'S',
            opening: {
              open: row[23],
              closed: row[24]
            }
          },{
            id:'0',
            label:'D',
            opening: {
              open: row[25],
              closed: row[26]
            }
          },
        ]
      },
      geometry: {
        type: 'Point',
        coordinates: [row[0], row[1]]
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