import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/root.saga';
import postsReducer from './slices/posts.slice';
import snackbarReducer from './slices/snackbar.slice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    posts: postsReducer,
    snackbar: snackbarReducer,
});

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});
sagaMiddleware.run(watcherSaga);

export default store;
