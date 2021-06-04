import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reduxBatch } from "@manaflair/redux-batch";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";

import { rootReducer, rootSaga } from "./rootReducer";

//create saga-middleware
const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
  }),
  sagaMiddleware,
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
  enhancers: [reduxBatch],
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
