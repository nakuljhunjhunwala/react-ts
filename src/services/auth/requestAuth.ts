import { IRequest, RequestError } from "./interfaces";

import { AUTH_API_URL } from "../../config/api";
import { routes } from "../../config";

const requestAuth = async <T>({ endpoint, config, credentials = "same-origin" }: IRequest): Promise<T> => {
  const url = `${AUTH_API_URL}/${endpoint}`;
  const result = await fetch(url, { ...config, credentials });

  const contentType = result.headers.get("content-type");

  const response = contentType && !contentType.includes("application/json") ? result.text() : result.json();

  if (!result.ok) {
    if (result.status === 401) {
      window.location.href = routes.home;
    }
    const requestError = new RequestError(await response);
    requestError.status = result.status;
    throw requestError;
  }
  return response;
};

export default requestAuth;
