import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

class CreateJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.user,
            name: '',
            title: '',
            website: '',
            email: '',
            phone: '',
            recruiter: '',
            postDate: '',
            appliedDate: '',
            interviewedDate: '',
            coverLetterUrl: '',
            payRange: '',
            state: '',
            open: true
        };

        this.handleClose = this.handleClose.bind(this);
        this.createNewJob = this.createNewJob.bind(this);
    }

    handleClose() {
        this.setState({ open: false });
        this.props.onClose();
    }

    handleChange(event) {
        var target = event.target;
        var value = target.value;
        var name = target.name;

        this.setState({
            [name]: value
        });
    }

    createNewJob() {
        console.log(this.state);
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div>
                <Dialog
                    open={!!this.props.view}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {'Create a new job'}
                    </DialogTitle>

                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <div>
                                <label>Company name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                    onChange={e => {
                                        this.handleChange(e);
                                    }}
                                    required
                                />
                            </div>

                            <div>
                                <label>Job title:</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={this.state.title}
                                    onChange={e => {
                                        this.handleChange(e);
                                    }}
                                    required
                                />
                            </div>
                            <div>
                                <label>Web site:</label>
                                <input
                                    type="text"
                                    name="website"
                                    value={this.state.website}
                                    onChange={e => {
                                        this.handleChange(e);
                                    }}
                                />
                            </div>
                            <div>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={e => {
                                        this.handleChange(e);
                                    }}
                                />
                            </div>
                            <div>
                                <label>Phone:</label>
                                <input
                                    type="phone"
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={e => {
                                        this.handleChange(e);
                                    }}
                                />
                            </div>
                            <div>
                                <label>Recruiter:</label>
                                <input
                                    type="text"
                                    name="recruiter"
                                    value={this.state.recruiter}
                                    onChange={e => {
                                        this.handleChange(e);
                                    }}
                                />
                            </div>
                            <div>
                                <label>Post Date:</label>
                                <input
                                    type="date"
                                    name="postDate"
                                    value={this.state.postDate}
                                    onChange={e => {
                                        this.handleChange(e);
                                    }}
                                />
                            </div>
                            <div>
                                <label>Applied Date:</label>
                                <input
                                    type="date"
                                    name="appliedDate"
                                    value={this.state.appliedDate}
                                    onChange={e => {
                                        this.handleChange(e);
                                    }}
                                />
                            </div>
                            <div>
                                <label>Interviewed Date:</label>
                                <input
                                    type="date"
                                    name="interviewedDate"
                                    value={this.state.interviewedDate}
                                    onChange={e => {
                                        this.handleChange(e);
                                    }}
                                />
                            </div>
                            <div>
                                <label>Cover letter url:</label>
                                <input
                                    type="text"
                                    name="coverLetterUrl"
                                    value={this.state.coverLetterUrl}
                                    onChange={e => {
                                        this.handleChange(e);
                                    }}
                                />
                            </div>
                            <div>
                                <label>Salary:</label>
                                <input
                                    type="text"
                                    name="payRange"
                                    value={this.state.payRange}
                                    onChange={e => {
                                        this.handleChange(e);
                                    }}
                                />
                            </div>
                            <div>
                                <label>State:</label>
                                <select
                                    name="state"
                                    value={this.state.state}
                                    onChange={e => {
                                        this.handleChange(e);
                                    }}
                                >
                                    <option value="">Please choose an option</option>
                                    <option value="pending">Pending</option>
                                    <option value="offered">Offered</option>
                                    <option value="rejected">Rejected</option>
                                </select>
                            </div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.createNewJob} color="primary">
                            Create
                        </Button>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Exit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default CreateJob;
