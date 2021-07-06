import { AnyAction, Reducer } from "redux";

import { InterfaceHealthData } from "./health/models";

export interface IStateTree {
  health: InterfaceHealthData
}

export interface IProps {
  children: React.ReactNode;
}

export type IRootReducer = Reducer<IStateTree, AnyAction>;
