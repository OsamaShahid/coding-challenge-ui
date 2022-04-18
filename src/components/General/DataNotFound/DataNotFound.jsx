import React, { Fragment } from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import dataNF from '../../../assets/images/dataNF.svg';

const DataNotFound = () => {
    return (
        <Fragment>
            <Container>
                <Grid
                    item
                    xs={12}
                    sx={{
                        py: 6,
                        px: 3,
                        display: 'flex',
                        width: '100%',
                        textAlign: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Box>
                        <img src={dataNF} alt="Data Not Found" />
                        <Typography variant="h5">Don't Find any response against this table</Typography>
                    </Box>
                </Grid>
            </Container>
        </Fragment>
    );
};

export default DataNotFound;
