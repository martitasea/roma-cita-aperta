import apiActionTypes, {
  apiFeaturesSuccess
} from './actions';

const ENV_URL = process.env.BASE_URL;
const KEY_GOOGLESHEET = process.env.KEY;

const ENDPOINTS = {
  getPois: sheet =>`${ENV_URL}${sheet}?valueRenderOption=UNFORMATTED_VALUE&key=${KEY_GOOGLESHEET}`
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
    case apiActionTypes.API_GET_FEATURES:
      return GET_FEATURES(ENDPOINTS.getPois('monuments'))
        .then(apiFeaturesSuccess)
        .then(store.dispatch)
        .then(() => next(action));
    }
    return next(action);
  };
};

export default apiMiddleware();
