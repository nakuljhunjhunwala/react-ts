import { Middleware, applyMiddleware, createStore } from "redux";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";

import { APP_NAME } from "../config";
import { CookieStorage } from "redux-persist-cookie-storage";
import Cookies from "cookies-js";
import { IStateTree } from "./interfaces";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

// we are retrieving the health state only
const persistConfig: PersistConfig<IStateTree> = {
  key: "health",
  whitelist: ["health"],
  storage: new CookieStorage(Cookies),
};

const middleware: Middleware[] = [thunk];

const composeEnhancers = composeWithDevTools({
  name: APP_NAME,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middleware)));
export const persistor = persistStore(store);
