import {IHealthData} from "yrgx-core";
import requestAuth from "../requestAuth";
export const getAuthServerHealth = (): Promise<IHealthData> => {
  return requestAuth<IHealthData>({
    endpoint: "health",
    config: {
      method: "GET",
    },
  });
};
