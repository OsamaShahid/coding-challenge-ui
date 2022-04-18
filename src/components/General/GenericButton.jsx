import React, { Fragment } from 'react';
import { Button } from '@mui/material';

const GenericButton = (props) => {
    return (
        <Fragment>
            <Button
                sx={{
                    backgroundColor: props.bgColor,
                    p: props.padding,
                    color: props.color,
                    textTransform: props.textTransform,
                    fontSize: props.fs,
                    borderRadius: '2px',
                    m: props.margin,
                }}
            >
                {props.btnText}
            </Button>
        </Fragment>
    );
};

export default GenericButton;
