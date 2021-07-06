import {
  FETCH_AUTH_HEALTH_BEGIN,
  FETCH_AUTH_HEALTH_FAILURE,
  FETCH_AUTH_HEALTH_SUCCESS
} from "../types";
import { IAction, InterfaceHealthData } from "../models";

const initialState: InterfaceHealthData = {
  version: '',
    releaseID: '',
    appID: '',
    details: {
      componentType: 'system',
    metricValue: 0,
    metricUnit: 'seconds',
    time: new Date(),
    }
};

export default (state = initialState, action: IAction): InterfaceHealthData => {
  switch (action.type) {
    case FETCH_AUTH_HEALTH_BEGIN:
      return { ...state };
    case FETCH_AUTH_HEALTH_FAILURE:
      return { ...state, version: action.payload}
    case FETCH_AUTH_HEALTH_SUCCESS:
      return {...state, version: action.payload.version, releaseID: action.payload.releaseID, appID: action.payload.appID, details: action.payload.details}
    default:
      return state;
  }
};
