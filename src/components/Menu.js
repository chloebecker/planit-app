import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const styles = theme => ({
    menuWrap: {
        marginTop: 10,
        width: 300,
        height: 600,
    },
    menuItem: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
        },
    },
});

function ListItemComposition(props) {
    const { classes } = props;

    return (
        <Paper className={classes.menuWrap}>
            <MenuList >
                <MenuItem className={classes.menuItem}>
                    <ListItemText classes={{ primary: classes.primary }} primary="Draft a Post" />
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                    <ListItemText classes={{ primary: classes.primary }} primary="Post Queue" />
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                    <ListItemText classes={{ primary: classes.primary }} primary="Post History" />
                </MenuItem>
            </MenuList>
        </Paper>
    );
}

ListItemComposition.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItemComposition);