import React from 'react'
import { FormControl, InputLabel, MenuItem, TextField, Grid, Select } from '@material-ui/core'



function FormComp({ formik }) {

    return (
        <Grid container direction="column" spacing={2} >
            <Grid item>
                <TextField label="Todo text..." name="todoText" onChange={formik.handleChange}
                    value={formik.values.todoText} />
            </Grid>
            <Grid item>
                <FormControl fullWidth>
                    <InputLabel id="priorityLable">Priority</InputLabel>
                    <Select
                        labelId="priorityLable"
                        label="Priority" name="priority" onChange={formik.handleChange}
                        value={formik.values.priority}>
                        <MenuItem value="low">Low</MenuItem>
                        <MenuItem value="mid">Mid</MenuItem>
                        <MenuItem value="high">High</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <TextField fullWidth id="date" label="due date" type="date" InputLabelProps={{
                    shrink: true,
                }} name="dueDate" onChange={formik.handleChange}
                    value={formik.values.dueDate} />
            </Grid>
        </Grid>
    )
}

export default FormComp
