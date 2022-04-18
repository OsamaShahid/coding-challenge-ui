import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showSnackBar } from '../../store/slices/snackbar.slice';
import { Grid, Typography, Button, Box, TextField } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const defaultFormInput = {
    post: '',
};

const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const snackbarObject = {
        type: '',
        message: '',
        open: false,
    };

    const [formInput, setFormInput] = useState(defaultFormInput);

    const handleInputChange = (name, value) => {
        setFormInput({
            ...formInput,
            [name]: value,
        });
    };

    const dispatchSnackBar = (type, message, open) => {
        snackbarObject.type = type;
        snackbarObject.message = message;
        snackbarObject.open = open;

        dispatch(showSnackBar(snackbarObject));
    };

    const handleInput = (e) => {
        e.stopPropagation();
        if (formInput.post === '') {
            dispatchSnackBar('error', 'Please Enter Post Id', true);
            return;
        }

        navigate(`/posts/${formInput.post}`)
    };

    return (
        <Fragment>
            <Grid container component="main" sx={{ height: '150vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={5}
                    sx={{ pl: 2, pr: 5, pt: 12, pb: 10, background: '#FFFFFF', boxShadow: 'none' }}
                >
                    <Box>
                        <Typography component="h1" variant="h5" sx={{ mt: 5 }}>
                            Search Post
                        </Typography>
                        <p style={{ margin: '1rem 0rem' }}>Enter Post Id</p>
                        <Box component="form" noValidate sx={{ mt: 4 }}>
                            <TextField
                                sx={{ mb: 2 }}
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                value={formInput.post}
                                fullWidth
                                id="post"
                                label="post id"
                                name="post"
                                autoComplete="post"
                            />

                            <Box sx={{ mt: 4, textAlign: 'right' }}>
                                <Button
                                    type="button"
                                    className="button-primary FllWidthBtn"
                                    variant="contained"
                                    onClick={(e) => handleInput(e)}
                                    sx={{ float: 'right' }}
                                    style={{ padding: '0rem 3rem' }}
                                >
                                    Get Post
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={7} className="rightSide" />
            </Grid>
            {/* </Suspense> */}
        </Fragment>
    );
};

export default Home;