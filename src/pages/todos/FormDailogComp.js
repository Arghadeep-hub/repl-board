import React from 'react';
import { Dialog, DialogActions,DialogContent, DialogTitle,  Button } from '@material-ui/core';
import FormComp from './FormComp';

function FormDailogComp(props) {
    

    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle>{props.editMode ? 'Update' : 'Add'} Todos</DialogTitle>
            <DialogContent>
                <FormComp formik={props.formik} />
            </DialogContent>
            <DialogActions>
                <Button color="secondary" onClick={props.handleClose}>Cancel</Button>
                <Button color="primary" onClick={props.handleSubmit}>{props.editMode ? 'Update' : 'Add'}</Button>
            </DialogActions>
        </Dialog>
    )
}

export default FormDailogComp
