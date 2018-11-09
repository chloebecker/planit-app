import React from 'react'
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from "@material-ui/core/TextField/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    },
    formControl: {
        minWidth: 150,
        marginTop: 30,
        marginLeft: 4,
    },
    textField: {
        width: 700,
    },
};

class Post extends React.Component {
    state = {
        defaultText: 'What would you like to say?',
        socialType: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container} >
                <form autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <InputLabel>Social Account</InputLabel>
                        <Select
                            value={this.state.socialType}
                            onChange={this.handleChange('socialType')}
                        >
                            <MenuItem value={1}>Twitter</MenuItem>
                            <MenuItem value={2}>Facebook</MenuItem>
                        </Select>
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
                </form>
            </div>
        )

    }
}

Post.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);