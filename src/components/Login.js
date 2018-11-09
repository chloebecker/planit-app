import React from 'react'
import App from '../App'
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
        email: '',
        password: '',
        success: false,
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <form autoComplete="off">
                    <div>
                        <TextField
                            id="email-input"
                            label="Email"
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
                            type="password"
                            onChange={this.handleChange('password')}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <Button variant="contained"
                                color="primary"
                                className={classes.button}>
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