import keyMirror from 'keymirror';
import {createAction} from 'redux-actions';

const ActionTypes = keyMirror({
  SET_VIEWPORT: null,
});

export default ActionTypes;

export const setViewport = createAction(ActionTypes.SET_VIEWPORT);