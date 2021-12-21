import keyMirror from 'keymirror';
import {createAction} from 'redux-actions';

const apiActionTypes = keyMirror({
  API_GET_VISIT_FEATURES: null,
  API_GET_VISIT_FEATURES_SUCCESS: null,
  API_GET_VISIT_FEATURES_ERROR: null,
  API_GET_WALK_FEATURES: null,
  API_GET_WALK_FEATURES_SUCCESS: null,
  API_GET_WALK_FEATURES_ERROR: null,
  API_GET_ACCOMODATION_FEATURES: null,
  API_GET_ACCOMODATION_FEATURES_SUCCESS: null,
  API_GET_ACCOMODATION_FEATURES_ERROR: null,
  API_GET_COMMERCE_FEATURES: null,
  API_GET_COMMERCE_FEATURES_SUCCESS: null,
  API_GET_COMMERCE_FEATURES_ERROR: null,
  API_GET_CATERING_FEATURES: null,
  API_GET_CATERING_FEATURES_SUCCESS: null,
  API_GET_CATERING_FEATURES_ERROR: null,
});

export default apiActionTypes;

export const apiGetVisitFeatures = createAction(apiActionTypes.API_GET_VISIT_FEATURES);
export const apiVisitFeaturesSuccess = createAction(apiActionTypes.API_GET_VISIT_FEATURES_SUCCESS);
export const apiVisitFeaturesError = createAction(apiActionTypes.API_GET_VISIT_FEATURES_ERROR);

export const apiGetWalkFeatures = createAction(apiActionTypes.API_GET_WALK_FEATURES);
export const apiWalkFeaturesSuccess = createAction(apiActionTypes.API_GET_WALK_FEATURES_SUCCESS);
export const apiWalkFeaturesError = createAction(apiActionTypes.API_GET_WALK_FEATURES_ERROR);

export const apiGetAccomodationFeatures = createAction(apiActionTypes.API_GET_ACCOMODATION_FEATURES);
export const apiAccomodationFeaturesSuccess = createAction(apiActionTypes.API_GET_ACCOMODATION_FEATURES_SUCCESS);
export const apiAccomodationFeaturesError = createAction(apiActionTypes.API_GET_ACCOMODATION_FEATURES_ERROR);

export const apiGetCommerceFeatures = createAction(apiActionTypes.API_GET_COMMERCE_FEATURES);
export const apiCommerceFeaturesSuccess = createAction(apiActionTypes.API_GET_COMMERCE_FEATURES_SUCCESS);
export const apiCommerceFeaturesError = createAction(apiActionTypes.API_GET_COMMERCE_FEATURES_ERROR);

export const apiGetCateringFeatures = createAction(apiActionTypes.API_GET_CATERING_FEATURES);
export const apiCateringFeaturesSuccess = createAction(apiActionTypes.API_GET_CATERING_FEATURES_SUCCESS);
export const apiCateringFeaturesError = createAction(apiActionTypes.API_GET_CATERING_FEATURES_ERROR);