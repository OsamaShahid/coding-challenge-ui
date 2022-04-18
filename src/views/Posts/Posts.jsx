import React, { Fragment, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../store/slices/posts.slice';

const Questions = () => {

    // Redux State
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);



    return (
        <Fragment>
            {
                (!posts.length) ? null :  <TableContainer component={Paper}>
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

                  {posts.map((post) => (
                      (!!post.body && !!post.title) ?
                    <TableRow
                      key={post.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="right">{post.id}</TableCell>
                      <TableCell align="right">{post.userId}</TableCell>
                      <TableCell align="right">{post.title}</TableCell>
                      <TableCell align="right">{post.body}</TableCell>
                    </TableRow> : null
                ))}

                      

                  </TableBody>
                </Table>
              </TableContainer>
            }
        </Fragment>
    );
};

export default Questions;
