import apiActionTypes, {
  apiVisitFeaturesSuccess,
  apiWalkFeaturesSuccess,
  apiAccomodationFeaturesSuccess,
  apiCommerceFeaturesSuccess,
  apiCateringFeaturesSuccess
} from './actions';

const ENV_URL = process.env.BASE_URL;
const KEY_GOOGLESHEET = process.env.KEY;

const ENDPOINTS = {
  getFeatures: sheet =>`${ENV_URL}${sheet}?valueRenderOption=UNFORMATTED_VALUE&key=${KEY_GOOGLESHEET}`
};

const GET_FEATURES = (url) => {
  return fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
    })
  }).then(response => {
    if (response.status === 200 && response.ok) {
      return response.json();
    } else {
      return Promise.reject( {
        status: response.status,
        message: response.statusText
      });
    }
  });
};

const apiMiddleware = () => {
  return store => next => action => {
    switch (action.type) {
    case apiActionTypes.API_GET_VISIT_FEATURES:
      return GET_FEATURES(ENDPOINTS.getFeatures('visit'))
        .then(apiVisitFeaturesSuccess)
        .then(store.dispatch)
        .then(() => next(action));
    case apiActionTypes.API_GET_WALK_FEATURES:
      return GET_FEATURES(ENDPOINTS.getFeatures('walk'))
        .then(apiWalkFeaturesSuccess)
        .then(store.dispatch)
        .then(() => next(action));
    case apiActionTypes.API_GET_ACCOMODATION_FEATURES:
      return GET_FEATURES(ENDPOINTS.getFeatures('accomodation'))
        .then(apiAccomodationFeaturesSuccess)
        .then(store.dispatch)
        .then(() => next(action));
    case apiActionTypes.API_GET_COMMERCE_FEATURES:
      return GET_FEATURES(ENDPOINTS.getFeatures('commerce'))
        .then(apiCommerceFeaturesSuccess)
        .then(store.dispatch)
        .then(() => next(action));
    case apiActionTypes.API_GET_CATERING_FEATURES:
      return GET_FEATURES(ENDPOINTS.getFeatures('catering'))
        .then(apiCateringFeaturesSuccess)
        .then(store.dispatch)
        .then(() => next(action));
    }
    return next(action);
  };
};

export default apiMiddleware();
