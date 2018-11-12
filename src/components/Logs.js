import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button/Button";

const styles = {
    wrapper: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    container: {
        display: 'block',
        justifyContent:'center',
        alignItems:'center',
        margin: 20,
    },
    header: {
        minWidth: 500,
        marginTop: 30,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 40,
    },
    card: {
        maxWidth: 700,
        padding: 10,
        margin: 10,
    },
    title: {
        fontSize: 16,
    },
    centerDiv: {
        fontSize: 20,
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    },
};

class Logs extends React.Component {

    routePost (e) {
        e.preventDefault();
        this.props.history.push('/post');
        console.log('from logs to post');
    }

    render() {
        const { classes } = this.props;
        console.log('rendered logs');

        return (
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <Typography className={classes.header} component="h1" variant="h2">
                        Twitter Post History
                    </Typography>
                    <Card className={classes.card}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Sunday, Nov. 11, 5:00 PM
                        </Typography>
                        <Typography component="p">
                            Don't forget, presentation in JBWS, Monday at 1 PM!
                        </Typography>
                    </Card>
                    <Card className={classes.card}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Saturday, Nov. 10, 12:45 PM
                        </Typography>
                        <Typography component="p">
                            Come see our presentation on Monday at 1 PM!
                        </Typography>
                    </Card>
                    <Card className={classes.card}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Friday, Nov. 9, 3:00 PM
                        </Typography>
                        <Typography component="p">
                            Ok this Planit app is pretty cool
                        </Typography>
                    </Card>
                    <Card className={classes.card}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Friday, Nov. 9, 1:00 PM
                        </Typography>
                        <Typography component="p">
                            Just started using the Planit app...
                        </Typography>
                    </Card>
                    <div className={classes.centerDiv}>
                        <Button
                            onClick={this.routePost.bind(this)}
                            variant="contained"
                            color="primary"
                        >
                            Draft a New Post
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}


export default withStyles(styles)(Logs);