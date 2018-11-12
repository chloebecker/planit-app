import React from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField/TextField";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    container: {
        marginTop: 50,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',

    },
    textField: {
        width: 400,
    },
    button: {
        marginTop: 15,
    }
};


class Login extends React.Component {

    state = {
        'email': '',
        'password': '',
        'loggedIn': false,
    };


    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    submitForm (e) {
        if(this.state.email === "chloe@gmail.com" && this.state.password === "helloworld") {
            e.preventDefault();
            this.props.history.push('/post');
            console.log('in submit');
        } else {
            console.log('incorrect login');
        }
    }

    render() {
        const { classes } = this.props;

        return (
                <div className={classes.container}>
                    <form autoComplete="off" onSubmit={this.submitForm.bind(this)} >
                        <div>
                            <TextField
                                id="email-input"
                                label="Email"
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                        <div>
                            <TextField
                                id="password-input"
                                label="Password"
                                value={this.state.password}
                                type="password"
                                onChange={this.handleChange('password')}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                        <div>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                            >
                                Login
                            </Button>
                        </div>
                    </form>
                </div>
        )
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);