import keyMirror from 'keymirror';
import {createAction} from 'redux-actions';

const apiActionTypes = keyMirror({
  API_GET_FEATURES: null,
  API_GET_FEATURES_SUCCESS: null,
  API_GET_FEATURES_ERROR: null,
});

export default apiActionTypes;

export const apiGetFeatures = createAction(apiActionTypes.API_GET_FEATURES);
export const apiFeaturesSuccess = createAction(apiActionTypes.API_GET_FEATURES_SUCCESS);
export const apiFeaturesError = createAction(apiActionTypes.API_GET_FEATURES_ERROR);