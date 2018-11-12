import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from "@material-ui/core/TextField/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    header: {
        minWidth: 500,
        marginTop: 30,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 40,
    },
    formControl: {
        minWidth: 150,
        marginTop: 50,
        marginLeft: 4,
        marginRight: 50,
        marginBottom: 10,
    },
    textField: {
        width: 700,
    },
    dateTimeField: {
        width: 280,
    },
    centerDiv: {
        fontSize: 20,
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    button: {
        margin: 10,
    }
};

class Post extends React.Component {
    state = {
        defaultText: 'What would you like to say?',
        platform: 'Twitter',
        account: 'Baxter',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    routeLogs (e) {
        e.preventDefault();
        this.props.history.push('/logs');
        console.log('from post to logs');
    }

    routeQueue (e) {
        e.preventDefault();
        this.props.history.push('/queue');
        console.log('from post to Scheduled');
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
            <div className={classes.container} >
                <Typography className={classes.header} component="h1" variant="h2">
                    Schedule a New Post
                </Typography>
            </div>
            <div className={classes.container} >
                <form autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <InputLabel>Platform</InputLabel>
                        <Select
                            value={this.state.platform}
                            onChange={this.handleChange('platform')}
                        >
                            <MenuItem value={1}>Twitter</MenuItem>
                            <MenuItem value={2}>Facebook</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Account</InputLabel>
                        <Select
                            value={this.state.account}
                            onChange={this.handleChange('account')}
                        >
                            <MenuItem value={1}>Club Lacrosse</MenuItem>
                            <MenuItem value={2}>Baxter</MenuItem>
                            <MenuItem value={3}>Chloe</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl} noValidate>
                        <TextField
                            id="datetime-local"
                            label="Post Time"
                            type="datetime-local"
                            defaultValue="2018-11-12T13:30"
                            className={classes.dateTimeField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </FormControl>
                    <div>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Text"
                            multiline
                            rowsMax="5"
                            placeholder={this.state.defaultText}
                            onChange={this.handleChange('defaultText')}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div className={classes.centerDiv}>
                        <div>
                        <Button
                            onClick={this.routeLogs.bind(this)}
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            View History
                        </Button>
                        </div>
                        <div>
                        <Button
                            // onClick={this.routeScheduled.bind(this)}
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Schedule!
                        </Button>
                        </div>
                    </div>

                </form>
            </div>
            </div>
        )

    }
}

Post.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);