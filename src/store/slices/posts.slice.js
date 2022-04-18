import { createSlice } from '@reduxjs/toolkit';

const PostsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        activePost: null,
    },
    reducers: {
        getPosts(state, action) {},
        getPost(state, action) {},
        setPosts(state, action) {
            state.posts = action.payload.posts;
        },
        setPost(state, action) {
            state.activePost = action.payload.activePost;
        },
    },
});

export const { setPosts, getPosts, getPost, setPost } = PostsSlice.actions;

export default PostsSlice.reducer;