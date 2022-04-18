import { call, put } from 'redux-saga/effects';
import { getPost, getPosts } from '../requests/posts.request';
import { setPosts, setPost } from '../../slices/posts.slice';
import { showSnackBar } from '../../slices/snackbar.slice';

export function* handlePosts(action) {
    try {
        const response = yield call(getPosts);

        const { data } = response;

        yield put(setPosts({ posts: data }));
    } catch (error) {
        yield put(showSnackBar({
            type: "error",
            message: error?.response?.data?.error,
            open: true
        }))
    }
}

export function* handlePost(action) {
    try {
        const response = yield call(getPost, action.payload);

        const  { data } = response;

        if (!data || !data.title || !data.body) {
            yield put(showSnackBar({
                type: "error",
                message: "Post data is not valid",
                open: true
            }))
            yield put(setPost({ activePost: null }));
            return;
        }

        yield put(setPost({ activePost: data }));
    } catch (error) {
        yield put(setPost({ activePost: null }));
        yield put(showSnackBar({
            type: "error",
            message: error?.response?.data?.error,
            open: true
        }))
    }
}
