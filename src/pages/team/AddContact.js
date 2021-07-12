import React from 'react'
import * as FiIcon from 'react-icons/fi';
import { Button, FormControl, Input, InputLabel,Typography } from '@material-ui/core'

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    }
    addContacts = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            this.props.handleVarient("Filled all the sections", {variant: 'warning'})
            return
        }
        this.props.hadleContact(this.state)
        this.setState({ name: "", email: "" })
    }
    render() {
        return (
                <form onSubmit={this.addContacts} className="modal">
                    <div className="modal-avatar">
                        <Typography variant="h5" color="primary">Add contacts</Typography>
                    </div>
                    <div className="modal-header">
                        <FormControl fullWidth>
                            <InputLabel variant="outlined">Add Name</InputLabel>
                            <Input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                        </FormControl>
                    </div>
                    <div className="modal-header">
                        <FormControl fullWidth>
                            <InputLabel variant="outlined">Add Emails</InputLabel>
                            <Input type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                        </FormControl>
                    </div>
                    <Button variant="outlined" color="primary" size="large" startIcon={<FiIcon.FiCheckCircle />} className="button" style={{ margin: '0 1rem' }} onClick={this.addContacts}>Add</Button>
                </form>
        )
    }
}

export default AddContact
