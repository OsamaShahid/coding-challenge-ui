import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { showSnackBar } from '../../store/slices/snackbar.slice';
import { getPost } from '../../store/slices/posts.slice';
const PostDetails = (props) => {

    const { id } = useParams();

    const dispatch = useDispatch();

    const { activePost } = useSelector((state) => state.posts);
    
    const snackbarObject = {
        type: '',
        message: '',
        open: false,
    };

    const dispatchSnackBar = (type, message, open) => {
        snackbarObject.type = type;
        snackbarObject.message = message;
        snackbarObject.open = open;

        dispatch(showSnackBar(snackbarObject));
    };

    useEffect(() => {
        if (!id) {
            dispatchSnackBar('error', 'Invalid Post Id', true);
        }
        if (!!id) {
            dispatch(getPost({ id: id }));
        }
    }, []);

    return (
        <Fragment>
            {
                (!activePost) ? null :  <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right">Post id</TableCell>
                      <TableCell align="right">User id</TableCell>
                      <TableCell align="right">Title</TableCell>
                      <TableCell align="right">Body</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                        key={activePost.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align="right">{activePost.id}</TableCell>
                        <TableCell align="right">{activePost.userId}</TableCell>
                        <TableCell align="right">{activePost.title}</TableCell>
                        <TableCell align="right">{activePost.body}</TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            }
        </Fragment>
    );
};

export default PostDetails;
