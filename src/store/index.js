import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import authReducer from "./auth";
import alertReducer from "./alert";
import loaderReducer from "./Loader";
import CommentsReducer from "./comments";
import UserReducer from"./users"
import walletReducer from "./wallet";
import configsReducer from "./configs";
import productReducer from "./product";
import persistConfig from "./persist";
import rootSaga from "./sagas";

const loadState = persistConfig.loadState;
const saveState = persistConfig.saveState;

const sagaMiddleware = createSagaMiddleware();
const preloadedState = loadState() || {};

const store = configureStore({
  devTools: true,
  preloadedState,
  reducer: {
    auth: authReducer,
    alert: alertReducer,
    loader: loaderReducer,
    comments: CommentsReducer,
    wallet: walletReducer,
    users: UserReducer,
    configs: configsReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

// Persistencia del estado
store.subscribe(() => {
  saveState(store.getState());
});

// Inicia la saga
sagaMiddleware.run(rootSaga);

export default store;
