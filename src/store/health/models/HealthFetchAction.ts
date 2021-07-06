import { FETCH_AUTH_HEALTH_BEGIN, FETCH_AUTH_HEALTH_FAILURE, FETCH_AUTH_HEALTH_SUCCESS } from '../types';

import { InterfaceHealthData } from './HealthModel';

export interface IFetchAuthHealthBegin {
  type: typeof FETCH_AUTH_HEALTH_BEGIN;
}

export interface IFetchAuthHealthSuccess {
  type: typeof FETCH_AUTH_HEALTH_SUCCESS;
  payload: InterfaceHealthData;
}

export interface IFetchAuthHealthFailure {
  type: typeof FETCH_AUTH_HEALTH_FAILURE;
  payload: string;
}

export type IAction =
  | IFetchAuthHealthBegin
  | IFetchAuthHealthSuccess
  | IFetchAuthHealthFailure;
