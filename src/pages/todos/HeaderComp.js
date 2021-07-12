import React from 'react'
import { Grid, Typography, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

function InputComp({ handleFabClick }) {

    return (
        <Grid container justifyContent="space-between"
            style={{ marginTop: '3rem' }} alignItems="center" >
            <Grid item>
                <Typography variant="h4" color="primary">
                   REPL Todo
                </Typography>
            </Grid>
            <Grid item>
                <Fab size="medium" color="primary" onClick={handleFabClick}>
                    <AddIcon />
                </Fab>
            </Grid>
        </Grid>
    )
}

export default InputComp
