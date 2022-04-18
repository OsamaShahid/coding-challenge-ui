import { takeLatest } from 'redux-saga/effects';
import {
    handlePosts, handlePost
} from './handlers/posts.handler';
import { getPosts, getPost } from '../slices/posts.slice';

export function* watcherSaga() {
    yield takeLatest(getPosts.type, handlePosts);
    yield takeLatest(getPost.type, handlePost)
}
