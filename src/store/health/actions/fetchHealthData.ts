import { FETCH_AUTH_HEALTH_BEGIN, FETCH_AUTH_HEALTH_FAILURE, FETCH_AUTH_HEALTH_SUCCESS } from "../types";
import { IFetchAuthHealthBegin, IFetchAuthHealthFailure, IFetchAuthHealthSuccess, InterfaceHealthData } from "../models";

import {Dispatch} from 'redux';
import { getAuthServerHealth } from '../../../services/auth';

const fetchAuthHealthBegin = (): IFetchAuthHealthBegin => ({
  type: FETCH_AUTH_HEALTH_BEGIN,
});

const fetchAuthHealthFailure = (error: string): IFetchAuthHealthFailure => ({
  type: FETCH_AUTH_HEALTH_FAILURE,
  payload: error
});

const fetchAuthHealthSuccess = (healthData: InterfaceHealthData): IFetchAuthHealthSuccess => ({
  type: FETCH_AUTH_HEALTH_SUCCESS,
  payload: healthData
});

export default () => async (dispatch: Dispatch) => {
  dispatch(fetchAuthHealthBegin());
  try {
    const application = await getAuthServerHealth();
    dispatch(fetchAuthHealthSuccess(application));
  } catch (e) {
    const { message } = e as Error;
    dispatch(fetchAuthHealthFailure(message));
  }
};
